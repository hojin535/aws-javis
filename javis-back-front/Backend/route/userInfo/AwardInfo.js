const express = require("express");
const router = express.Router();
const authenticateToken = require("../middlewares/authenticateToken");
const { client, UpdateItemCommand,GetItemCommand } = require("../../DynamoDB");

router.put("/", authenticateToken, async (req, res) => {
  const userId = req.user.id; // 토큰에서 userId 가져오기
  const body = req.body;

  console.log("요청 본문:", body);

  // DynamoDB 형식으로 변환
  const dynamoDBFormattedBody = body.map((item) => ({
    M: {
        awardName: { S: item.awardName || "" },
        awardingInstitution: { S: item.awardingInstitution || "" },
        awardDate: { S: item.awardDate || "" },
        awardDetail: { S: item.awardDetails || "" },
      remarks: { S: item.remarks || "" },
    },
  }));

  const params = {
    TableName: "javis",
    Key: {
      userId: { S: userId },
    },
    UpdateExpression: "SET awardInfo = :awardInfo",
    ExpressionAttributeValues: {
      ":awardInfo": {
        L: dynamoDBFormattedBody, // 배열(L)로 저장
      },
    },
  };

  try {
    const command = new UpdateItemCommand(params);
    await client.send(command);
    res.status(200).json({ message: "사용자 정보가 저장되었습니다." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
});

router.delete("/:index", authenticateToken, async (req, res) => {
  const userId = req.user.id;
  const index = parseInt(req.params.index); // 인덱스를 숫자로 변환

  const getParams = {
    TableName: "javis",
    Key: {
      userId: { S: userId },
    },
    ProjectionExpression: "awardInfo",
  };

  try {
    const getResponse = await client.send(new GetItemCommand(getParams));
    const awardInfo = getResponse.Item?.awardInfo?.L || [];

    // 인덱스가 유효한지 확인
    if (index < 0 || index >= awardInfo.length) {
      return res.status(400).json({ message: "유효하지 않은 인덱스입니다." });
    }

    // 해당 인덱스의 항목을 제거
    const updatedAwardInfo = [...awardInfo.slice(0, index), ...awardInfo.slice(index + 1)];

    const updateParams = {
      TableName: "javis",
      Key: {
        userId: { S: userId },
      },
      UpdateExpression: "SET awardInfo = :awardInfo",
      ExpressionAttributeValues: {
        ":awardInfo": { L: updatedAwardInfo },
      },
    };

    await client.send(new UpdateItemCommand(updateParams));

    res.status(200).json({ message: "항목이 삭제되었습니다." });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "서버 에러가 발생했습니다." });
  }
});

module.exports = router;

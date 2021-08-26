// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const users = require('./../users');

export default function getList(req, res) {
    const { lastRecordId } = req.body;

    const hasFromId = !!lastRecordId;

    const lastIdIndex = hasFromId ? users.findIndex(item => item.username === lastRecordId) : 0;
    const fromIndex = lastIdIndex <= 0 ? 0 : lastIdIndex + 1;
    const response = users.slice(fromIndex, fromIndex + 10);

    res.json({
        ok: true,
        data: response
    });
}
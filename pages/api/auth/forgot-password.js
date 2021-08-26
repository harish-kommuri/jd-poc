// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function signup(req, res) {
    res.status(200).json({
        ok: 1,
        message: "Email sent successfully..."
    });
}

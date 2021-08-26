// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function login(req, res) {
  res.status(200).json({
      ok: 1,
      data: {
          id: 22334,
          name: 'John Doe'
      }
  });
}

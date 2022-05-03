const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)


const auth = async (req, res, next) => {
    console.log(req.headers)
    try {
     const token=req.headers.authorization.split(" ")[1];
    const ticket = await client.verifyIdToken({
        idToken:token,
        audience:process.env.GOOGLE_CLIENT_ID
    })
    const payload=ticket.getPayload();
    const{sub}=payload
    req.userId=sub
    console.log(req.userId)
      next();
    } catch (error) {
      console.log(error);
    }
  };

  module.exports =auth
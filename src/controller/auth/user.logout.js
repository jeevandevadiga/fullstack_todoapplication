/*
in this page we are writing the logout code 
right now just delete the cookie from the 
*/

async function logout(req, res) {
  try {
    res.clearCookie("usertoken");
    res.status(200).json({ message: "logged out successfully" });
  } catch (error) {
    res.status(401).json({ message: "failed in the logout page" });
  }
}
export default logout;

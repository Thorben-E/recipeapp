exports.signup = (req, res) => {
  res.send('signup');
};

exports.login = (req, res) => {
  res.send('login');
};

exports.current_user = (req, res) => {
  res.status(200).send('Current user info / Authorization')
}
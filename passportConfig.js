const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pool = require('./db');

passport.use(
  new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
    try {
      const query = 'SELECT * FROM users WHERE email = $1';
      const values = [email];
      const result = await pool.query(query, values);

      if (result.rows.length === 0) {
        return done(null, false, { message: 'Incorrect email or password.' });
      }

      const user = result.rows[0];
      
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) {
          // Handle error
        } else if (result) {
          // Passwords match
          return done(null, user);
        } else {
          // Passwords do not match
          return done(null, false, { message: 'Incorrect email or password.' });
        }
      });
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [id];
    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      return done(new Error('User not found.'));
    }

    const user = result.rows[0];
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;

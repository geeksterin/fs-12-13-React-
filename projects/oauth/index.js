const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const app = express();

app.use(
  require("express-session")({
    secret: "abcd1234",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID:
        "40957692844-36muc3up04vs5tu1b94cjhm8efo9ar4b.apps.googleusercontent.com",
      clientSecret: "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",
      callbackURL: "http://localhost:10000/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // Store user data in session
      console.log(accessToken);
      console.log(profile);
      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Define your routes
app.get("/", (req, res) =>
  res.send('<a href="/auth/google">Login with Google</a>')
);

app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "https://www.googleapis.com/auth/gmail.readonly"],
  })
);

app.get(
  "/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/");
  }
);

app.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

// Access the user information in other routes like this
app.get("/profile", (req, res) => {
  if (!req.isAuthenticated()) {
    return res.redirect("/");
  }
  res.send(
    `<h1>Hello, ${req.user.displayName}!</h1><a href="/logout">Logout</a>`
  );
});

const PORT = 10000;
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

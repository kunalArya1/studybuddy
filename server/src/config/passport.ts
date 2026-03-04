import passport from "passport";
import { Strategy as GitHubStrategy } from "passport-github2";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import dotenv from "dotenv";
import { prisma } from "../lib/prisma.js";

dotenv.config();

if (
  !process.env.GOOGLE_CLIENT_ID ||
  !process.env.GOOGLE_CLIENT_SECRET ||
  !process.env.GOOGLE_CALLBACK_URL
) {
  throw new Error("Google OAuth environment variables missing");
}

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (
      req: any,
      _accessToken: string,
      _refershToken: string,
      profile: any,
      done: any,
    ) => {
      try {
        const email: string = profile.emails[0]?.value;
        let approved = false;
        const role = req.query.state || "STUDENT";
        if (role === "STUDENT" || role === "ADMIN") {
          approved = true;
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          await prisma.user.create({
            data: {
              email: email,
              name: profile.displayName,
              accountType: role,
              approved: approved,
            },
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error as Error, undefined);
      }
    },
  ),
);
if (
  !process.env.GITHUB_CLIENT_ID ||
  !process.env.GITHUB_CLIENT_SECRET ||
  !process.env.GITHUB_CALLBACK_URL
) {
  throw new Error("Google OAuth environment variables missing");
}

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URL,
      passReqToCallback: true,
    },
    async (
      req: any,
      _accessToeken: String,
      _refershToken: string,
      profile: any,
      done: any,
    ) => {
      try {
        const email: string = profile.emails[0]?.value;
        const role = req.query.state || "STUDENT";
        let approved = false;
        if (role === "STUDENT" || role === "ADMIN") {
          approved = true;
        }
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          await prisma.user.create({
            data: {
              email: email,
              name: profile.displayName,
              accountType: role,
              approved: approved,
            },
          });
        }
        return done(null, user);
      } catch (error) {
        return done(error as Error, undefined);
      }
    },
  ),
);

export default passport;

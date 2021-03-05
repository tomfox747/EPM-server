const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const dummyUsers = require('../../DummyData/users.json').users
const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

passport.use(
    new JWTstrategy(
        {
            jwtFromRequest : ExtractJWT.fromAuthHeaderAsBearerToken(),
            secretOrKey : '32jh1tf4h3892054ar8e7htr95nt43iuolh59438yg42'
        },
        async (token,done) =>{
            try{
                return done(null, token)
            }catch(error){
                done(error)
            }
        }
    )
) 
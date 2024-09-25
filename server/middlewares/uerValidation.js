const userValidation=(req,res,next)=>{
    const Joi = require('joi');

    const{name,email,password,password2}=req.body;
    const userInfo={
        name:name,
        email:email,
        password:password,
        password2:password2
    }

//joi start

const schema = Joi.object({
    name: Joi.string()

        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
    .min(4)
    .max(10)
    .required(),

    password2: Joi.ref('password'),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})



const {error}=schema.validate(userInfo);
// -> { value: { username: 'abc', birth_year: 1994 } }

if(error){
    res.status(501).json({error:error.details[0].message});
}
next();
}
module.exports=userValidation; 
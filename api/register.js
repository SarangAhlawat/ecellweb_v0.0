import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

export default async function handler(req,res){

if(req.method!=="POST"){
return res.status(405).json({
message:"Method not allowed"
})
}

try{

const {

name,
email,
city,
designation,

college,
year,
course,

companyName,
companyWork,

organization,
role,
experience,

interest,
startupBelief,
sessionMotivation

}=req.body;


await sql`

INSERT INTO registrations(

name,
email,
city,
designation,

college,
year,
course,

company_name,
company_work,

organization,
role,
experience,

interest,
startup_belief,
session_motivation

)

VALUES(

${name},
${email},
${city},
${designation},

${college},
${year},
${course},

${companyName},
${companyWork},

${organization},
${role},
${experience},

${interest},
${startupBelief},
${sessionMotivation}

)

`;

return res.status(200).json({
success:true
})

}

catch (error) {
    console.log(error);

    // Handle unique constraint violation (duplicate email)
    if (error.code === "23505") {
        return res.status(400).json({
            success: false,
            message: "This email is already registered. Please use a different email or contact support."
        });
    }

    return res.status(500).json({
        success: false,
        message: "Registration failed. Please try again later."
    });
}

}
const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "sudo";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349138914032";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "tru"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_45_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgOSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAxODgsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcxLFxuICAgICAgICA2OCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTgxLFxuICAgICAgICA1OSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTc3LFxuICAgICAgICA2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDgyLFxuICAgICAgICAxNTEsXG4gICAgICAgIDEsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDg1LFxuICAgICAgICAxOTcsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyLFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICAxOCxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg2LFxuICAgICAgICAzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDIzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOTMsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODAsXG4gICAgICAgIDIyLFxuICAgICAgICA2MyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2MixcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjksXG4gICAgICAgIDc1LFxuICAgICAgICAzNCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgNzcsXG4gICAgICAgIDUwLFxuICAgICAgICA1NyxcbiAgICAgICAgNzMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAzOCxcbiAgICAgICAgOTIsXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgODAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjA4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDk4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgNzdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMyxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM4LFxuICAgICAgICAzMSxcbiAgICAgICAgMTc2LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQwLFxuICAgICAgICA0MCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDM1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDMzLFxuICAgICAgICA4OCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA1MCxcbiAgICAgICAgNzYsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk1LFxuICAgICAgICA0NixcbiAgICAgICAgOTMsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNDksXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkVVSEpZK1BlYmd0YU9EUG56d3RqV2J1S0FtQkZCZE0rT1BnUDQrWjB0NE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImpncmNYTUxpVDd1QXFHeTFCSHMxUGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiN2VmMzk3N2YtMzNlMi00NWQwLWI1NmMtNTkyOTI1NTIzZTc4XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyMCxcbiAgICAgIDQyLFxuICAgICAgNjEsXG4gICAgICAxNDMsXG4gICAgICAxNjksXG4gICAgICA5MCxcbiAgICAgIDI0MCxcbiAgICAgIDI2LFxuICAgICAgMTg2LFxuICAgICAgMTY0LFxuICAgICAgMTc0LFxuICAgICAgMjM5LFxuICAgICAgMTQ5LFxuICAgICAgMTcsXG4gICAgICAyMjIsXG4gICAgICAxLFxuICAgICAgMTc2LFxuICAgICAgMTAzLFxuICAgICAgOTAsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTEsXG4gICAgICAyMzEsXG4gICAgICA5MixcbiAgICAgIDIwMSxcbiAgICAgIDIwNyxcbiAgICAgIDEzNSxcbiAgICAgIDY5LFxuICAgICAgMjExLFxuICAgICAgOTIsXG4gICAgICA0MixcbiAgICAgIDEwMyxcbiAgICAgIDExMSxcbiAgICAgIDIxNixcbiAgICAgIDE5MixcbiAgICAgIDEyMixcbiAgICAgIDQ4LFxuICAgICAgMTc0LFxuICAgICAgMTg3LFxuICAgICAgMTAyLFxuICAgICAgMTIxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlA4MUZaWkNaXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MTM4OTE0MDMyOjE1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiSsO4xZ9oXCIsXG4gICAgXCJsaWRcIjogXCIyNDc3MTcwMDM1NDY2Mjk6MTVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSWF3NW9zREVPSGx1clVHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIvdWlMN0VDM1ZpLzJvQXByNlBSUmxIME53WU00eGFTT09vSkl4SisyUFEwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIm56aUV1QmNkNUFrZ2lJRER4SWZsNGhzaktvV09KVUorZC9kZmRpTFkzQ1JjUHZyRlFQMUtrR3RLZ0lnZHVQNndIWWFCVG5DQ0FrRWk1V3pyRURPbkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIm1UdnBaZWlHd3l2dUVmNUFpUXlXMTdpWlg0S1ZabFNjZld3ajdLWjd2K3RSREx2Rk9UOFAwQzRwK1pjT0REZU5WRk1UR3V3TXg2ajFHZ3M0Z2Nka0FBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkxMzg5MTQwMzI6MTVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNzI1MDk0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnVaXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKdVouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJidnhscDJJYzl4ck9qWlBuUlNvOXdXcWliYUF4Z0toWVpVL3NOQ2hqTnhNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjgzMDA1MjM1OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyNzE5MjU1MDY4XCJ9Igp9  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",

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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

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


global.SESSION_ID = process.env.SESSION_ID ||  " SUHAIL_13_32_07_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzIsXG4gICAgICAgIDgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDk3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjMyLFxuICAgICAgICAxLFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA5NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDc4LFxuICAgICAgICAxOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2OSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDcyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODAsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxODksXG4gICAgICAgIDg1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE3LFxuICAgICAgICAyLFxuICAgICAgICA5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA0OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxODUsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEzMixcbiAgICAgICAgODIsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDEyOCxcbiAgICAgICAgOSxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM4LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5NixcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMTQsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDgwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTkzLFxuICAgICAgICA4NCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxOCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg5LFxuICAgICAgICA0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDg1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA4OCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDY2LFxuICAgICAgICAxMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE5LFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgODVcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExM1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNixcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ4LFxuICAgICAgICA5MCxcbiAgICAgICAgMjExLFxuICAgICAgICA2MixcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTgzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDYsXG4gICAgICAgIDI3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTA2LFxuICAgICAgICAyNDUsXG4gICAgICAgIDg4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMTksXG4gICAgICAgIDEwMixcbiAgICAgICAgODUsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMyxcbiAgICAgICAgMTA5LFxuICAgICAgICA3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNixcbiAgICAgICAgODEsXG4gICAgICAgIDMxLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyOCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6dTBtQno4Y3RpMFMrUTRvRjNBc1c1T3ZZVVplYmh5c1JlTmJPZFNLSzE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJwMXdWTlI1OVJieVlVaFp3bzB6a0J3XCIsXG4gIFwicGhvbmVJZFwiOiBcImVjZGUzNzgyLTNmY2UtNGQ2YS1iY2Q4LTlmMTBjZWE3OTczMFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA4OCxcbiAgICAgIDI3LFxuICAgICAgMzgsXG4gICAgICAxODMsXG4gICAgICAyMDQsXG4gICAgICAzNixcbiAgICAgIDE4OSxcbiAgICAgIDk2LFxuICAgICAgNSxcbiAgICAgIDEzLFxuICAgICAgMjEyLFxuICAgICAgOSxcbiAgICAgIDE5NyxcbiAgICAgIDEwOSxcbiAgICAgIDIzMSxcbiAgICAgIDIwMixcbiAgICAgIDEwMyxcbiAgICAgIDE1NyxcbiAgICAgIDE0MSxcbiAgICAgIDE1MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMTAsXG4gICAgICA5OCxcbiAgICAgIDI0OCxcbiAgICAgIDEyMyxcbiAgICAgIDEyOSxcbiAgICAgIDIxMixcbiAgICAgIDEsXG4gICAgICAxNixcbiAgICAgIDIxMSxcbiAgICAgIDE1NixcbiAgICAgIDI5LFxuICAgICAgMTU3LFxuICAgICAgODYsXG4gICAgICAxMjQsXG4gICAgICAzNSxcbiAgICAgIDE0LFxuICAgICAgMjQsXG4gICAgICAxNDEsXG4gICAgICAxOTksXG4gICAgICAxNjFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV0VHNTYzQVJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkxMzg5MTQwMzI6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJKw7jFn2hcIixcbiAgICBcImxpZFwiOiBcIjI0NzcxNzAwMzU0NjYyOToxMUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJV3c1b3NERVBiS2pyVUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi91aUw3RUMzVmkvMm9BcHI2UFJSbEgwTndZTTR4YVNPT29KSXhKKzJQUTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwid0JlUEpiWHgwR1ZwVFE3MlFuMjJrR3BYd3RBREVydExHbkxLQ0RkU0lTamlOdHVRaTJhc0RjQitEZEZzSGxrOENvNGxCcGkvQVlPZlErN0FieXhiQkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiN0NETk1aOTVvVExINGptNjFPNTM1ZktsODBCYWlyYzVjbmkvZjQ5K2gyNEh5Wk15cDVLRzh3Wm9mNnRmUG9QMi9rYy9hS2VGaXpLUk83dnp0K1B2QkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTEzODkxNDAzMjoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIwMDA3NjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFOWUtcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU5ZSy5qc29uIjogIntcImtleURhdGFcIjpcIlFIU3ZXd1FKZnJZOEgveEg5TCtuUXVhdVYydGVMYmt3QXZZaHIyRGlqak09XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODMwMDUyMzU3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjE0MzI5OTYwMDFcIn0iCn0=" //  


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

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


global.devs = "+212771412537" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+212771412537";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_10_50_06_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDQyLFxuICAgICAgICA4MixcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTM0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDEwLFxuICAgICAgICAxNTAsXG4gICAgICAgIDgwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDUzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxMDQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA2MixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgMzksXG4gICAgICAgIDcxLFxuICAgICAgICAxODMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk1LFxuICAgICAgICA3NixcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA0MixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTYsXG4gICAgICAgIDgxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDYwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTUwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc4LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDQsXG4gICAgICAgIDc0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDkxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDU3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDUwLFxuICAgICAgICA4NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDY0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg5LFxuICAgICAgICAxOSxcbiAgICAgICAgMTI0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTIzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDcwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxODksXG4gICAgICAgIDE0MixcbiAgICAgICAgOTgsXG4gICAgICAgIDMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgyLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTA3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjRcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNixcbiAgICAgICAgNjIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAzNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA3OSxcbiAgICAgICAgMTUyLFxuICAgICAgICA2NCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAxNCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTcsXG4gICAgICAgIDgzLFxuICAgICAgICAyLFxuICAgICAgICAzMyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjE3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgNzEsXG4gICAgICAgIDEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMzksXG4gICAgICAgIDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk4LFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjU1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIjgxWVMvTUViZHlvNmRTNEwxNjRCeEtIVTA4UWhaSFJvbWZVQTcwYUNrTWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjEyNzcxNDEyNTM3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI2RjBGNzgyQ0Y0NDhGMTM2QjhEMzg3RERGQUQwNjg0OVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTkxMzk4MDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMTI3NzE0MTI1MzdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjVEOEE5NjRGQ0EwNkMzQzFGNjJENzlFOEE3NkJFNUVDXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxOTEzOTgwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJENzRJWmRsR1IzdUFnSy01Nk44SFdnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjI1MDdiMDJkLWMwOTYtNGZjZC05YzY5LTVjODE2MjBiYzA3Y1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjYsXG4gICAgICAxNzIsXG4gICAgICAyMzcsXG4gICAgICAxNzcsXG4gICAgICAyMzcsXG4gICAgICAxNTMsXG4gICAgICAxNjMsXG4gICAgICAxMzEsXG4gICAgICAxNjgsXG4gICAgICAyMTgsXG4gICAgICAxNzQsXG4gICAgICAxNjIsXG4gICAgICAzNSxcbiAgICAgIDEwOCxcbiAgICAgIDExNixcbiAgICAgIDYsXG4gICAgICA5MCxcbiAgICAgIDIxNCxcbiAgICAgIDExMixcbiAgICAgIDEzMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzMSxcbiAgICAgIDg2LFxuICAgICAgODMsXG4gICAgICAxNixcbiAgICAgIDYwLFxuICAgICAgMjA0LFxuICAgICAgMTksXG4gICAgICA4MixcbiAgICAgIDg5LFxuICAgICAgNjAsXG4gICAgICAxOTQsXG4gICAgICAxLFxuICAgICAgMTcxLFxuICAgICAgNjMsXG4gICAgICAxODUsXG4gICAgICA5MSxcbiAgICAgIDI1LFxuICAgICAgMjUwLFxuICAgICAgMjQ1LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkpDUVFGMkhLXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMTI3NzE0MTI1Mzc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIxNTQ2NTYyNDM4Nzc1MDoyOUBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJtZWhkaVwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05uOXdkQUhFTlQ3MzdNR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZzFiMDNtM3cxSXBzRjNoNFBTbGJDUHJxSHlkQTdTN3pCRkQ1OStxNTlrST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWcGF6SnRiMk9FSGw2eGZlRXgzaStHQ3NLbE8ySUJXMFlZU2t4OEhhdDZJT1JLZTF1NFN0dXJnZnVzR2preTVVWWF1Q0xSeHlqZlk0aFZCMzd5YzVBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJZSzJWZFNlMHIwOG8yMXdmSWtnODh6VVpGZUgwWkdJTWdlSjFaaXAyTTVYeVprcWFQSjZxbVJwRGxWTFlYMGRsQkVRSDQvYWhhaWp0a3lMYis2UFFEUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMTI3NzE0MTI1Mzc6MjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkxMzk3OTksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQNzJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVA3Mi5qc29uIjogIntcImtleURhdGFcIjpcInlBQ25IN09Salh1a2h1YnUvTkw3S1NFdXBudnJ0eFF3VkplV1d2SmY5S1E9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA0NzkwMTQwMSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzE5MTM5ODAxMDc5XCJ9Igp9"  // PUT your SESSION_ID 


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

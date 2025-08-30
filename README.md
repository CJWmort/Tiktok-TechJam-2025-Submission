# Tiktok-TechJam-2025-Submission
submission for tiktok techjam 2025 

Team Members: 1
Name: Chin Jun Wen

Youtube channel: BakingPeanut
VIDEO LINK: https://youtu.be/ITw_afc7JTw

Features:
Development tools used: HTML, CSS, Javascript, Chrome Extension 

Assets used:
- index.html
- style.css
- pii.js
- manifest.json

Relevant Problem Statement: 7. Privacy Meets AI: Building a Safer Digital Future

Enhancing the privacy of AI systems themselves (Privacy of AI)

Project Description 

Chrome Extension: PromptShield

I’ve built a chrome extension prototype (PromptShield) where GenAI users can type in their prompts first into the chrome extension to “filter” / “detect” for any sensitive PII information in their prompt before they go ahead and paste it in GenAIs like ChatGPT etc.

PromptShield will filter and redact these prompts accordingly:
- Singapore Phone Numbers > *[PHONE]*
- Singapore NRIC > *[NRIC]*
- Emails > *[EMAIL]*
- Credit Card Numbers > *[$CARD]*

The application can be used in the chrome browser, users just need to click / tap on the chrome extension to open up the popup interface to filter their prompts before they paste it into ChatGPT.

Problem: Users of GenAI these days are hasty and don’t think twice before they input their prompts to feed into the LLMs. Sometimes the prompts contain sensitive information such as email or NRIC numbers posing as potential privacy leakage. The goal of this application is to catch these dangerous prompts before they make its way to the LLMs input by filtering the prompts for the users first.

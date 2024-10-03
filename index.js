document.addEventListener("DOMContentLoaded", () => {
    const faqData = [
        {
            "id":0,
            "section":"Plans & Payments",
            "question":"What are the subscription plans offered in India?",
            "answer":"<p class=\"faq-text\">Aha offers both free and paid content for users. All users have the ability to access free content, which is available for streaming with advertisements. In order to access paid content, the following subscription plans are available, each with its own features and pricing details.<br><br>You may check the plans and subscribe here: <a href=\"/subscription/viewplans\" class=\"faq-link\">View Plans Page</a><br><ol type=\"i\"><li>aha Gold:<ul> <li>Price: 899 INR</li><li>Validity: 12 months</li><li>Benefits: This annual plan provides ad-free access to Telugu and Tamil Movies as well as Web series in 4K video quality and Dolby sound. You can enjoy the content on up to 5 devices, including mobile phones, TV screens, iPads, or tablets.</li></ul></li><li>Telugu Annual Premium Plan:<ul><li> Price: 699 INR</li><li> Validity: 12 months</li><li> Benefits: This annual plan offers unlimited ad-free access to 100% Telugu Movies and Web Series. You can enjoy the content on up to 5 devices, including mobile phones, TV screens, iPads, or tablets.</li></ul></li><li>Telugu Annual Plan:<ul><li> Price: 399 INR</li><li> Validity: 12 months</li><li> Benefits: This annual plan offers unlimited access to 100% Telugu Movies and Web Series. Do note that personalized advertisements will be shown during streaming. You can enjoy the content on up to 5 devices, including mobile phones, TV screens, iPads, or tablets.</li></ul></li><li>Telugu Quarterly Mobile Plan:<ul><li> Price: 99 INR</li><li> Validity: 3 months</li><li> Benefits: The Telugu Quarterly Mobile Plan is a discounted quarterly plan priced at 99 INR. It is exclusively available for first-time users and provides unlimited access to 100% Telugu Movies and Web Series for three months. Do note that personalized advertisements will be shown during streaming. This plan only supports streaming on one mobile device and does not support other streaming devices.</li></ul></li><li>Telugu Quarterly Plan:<ul><li> Price: 199 INR</li><li> Validity: 3 months</li><li> Benefits: This quarterly plan allows unlimited access to 100% Telugu Movies and Web Series. Do note that personalized advertisements will be shown during&nbsp;streaming. You can enjoy the content on up to 5 devices, including mobile phones, TV screens, iPads, or tablets.</li></ul></li><li> Tamil Annual Plan:<ul><li> Price: 265 INR</li><li> Validity: 12 months</li><li> Benefits: This discounted annual plan provides unlimited access to 100% Tamil Movies and Web Series. Do note that personalized advertisements will be shown during streaming. You can enjoy the content on up to 5 devices, including mobile phones, TV screens, iPads, or tablets.</li></ul></li><li>Tamil Quarterly Plan:<ul><li> Price: 99 INR</li><li> Validity: 3 months</li><li> Benefits: This quarterly plan allows unlimited access to 100% Tamil Movies and Web Series. Do note that personalized advertisements will be shown during streaming. You can enjoy the content on up to 5 devices, including mobile phones, TV screens, iPads, or tablets.</li></ul></li></ol></p>"
        },
        {
            "id":1,
            "section":"Plans & Payments",
            "question":"What are the limitations on my subscription plan?",
            "answer":"<p class=\"faq-text\">Subscription purchased in a country will be applicable only in that country.</p>"
        },
        {
            "id":2,
            "section":"Plans & Payments",
            "question":"Can I access aha services outside India?",
            "answer":"<p class=\"faq-text\">Yes, you can access aha services outside India. Below are the plans available:<br>aha GOLD, Annual,Monthly and aha GOLD Monthly.<br>You may check the plans and subscribe here: <a href=\"/subscription/viewplans\" class=\"faq-link\">View Plans Page</a></p>"
        },
        {
            "id":3,
            "section":"Plans & Payments",
            "question":"What are the different payment methods for aha?",
            "answer":"<p class=\"faq-text\">In India, You can make payments via Credit Cards, Debit Cards, Netbanking, UPI(PhonePe, Google Pay, BHIM, Paytm etc.), Wallets(Paytm, PhonePe etc.). Apple users can also pay using itunes. International Subscribers may make a payment through Google Play, iTunes, Credit Cards, Debit Cards, Amazon IAP and Roku pay.<br>* You can also pay by scanning the QR Code or by clicking the payment link through TV in India..</p>"
        },
        {
            "id":4,
            "section":"Plans & Payments",
            "question":"Do you provide the data charges along with the subscription?",
            "answer":"<p class=\"faq-text\">No, data charges are not included with the aha subscription. Data charges will be levied by your respective mobile data/internet service provider</p>"
        },
        {
            "id":5,
            "section":"Plans & Payments",
            "question":"Is it safe to submit my credit cards information?",
            "answer":"<p class=\"faq-text\">We use highly secured payment gateways for web and mobile transactions which are PCI compliant. We ensure your privacy and transactions are safe as we follow secured encryption standards.</p>"
        },
        {
            "id":6,
            "section":"Plans & Payments",
            "question":"Can I reverse a charge that I made by mistake?",
            "answer":"<p class=\"faq-text\">We advise you to be careful during the subscription and payment process. Once payment is successful, it cannot be reversed as per our refund policy.</p>"
        },
        {
            "id":7,
            "section":"Plans & Payments",
            "question":"Can I get a refund once I cancel my subscription?",
            "answer":"<p class=\"faq-text\">Cancelling a subscription does not process any refund. It deactivates any further Auto-Renewal. As aha does not process refunds, you would still have access to content until your current subscription period lapses.</p>"
        },
        {
            "id":8,
            "section":"Plans & Payments",
            "question":"I found charges by aha that I did not authorize. What should I do?",
            "answer":"<p class=\"faq-text\">Please contact <a href=\"mailto:support@aha.video\" class=\"faq-link\">support@aha.video</a> in case you find any unauthorized transactions in your account. We also suggest you contact your respective bank for the charges.</p>"
        },
        {
            "id":9,
            "section":"Plans & Payments",
            "question":"How do I resolve if my transaction has failed and the money got deducted from my bank account?",
            "answer":"<p class=\"faq-text\">Sometimes, the payments made may get delayed by an hour due to issues with payment gateways. We request your patience for the time being.<br>If the payment still doesn't reflect we request you to write to <a href=\"mailto:support@aha.video\" class=\"faq-link\">support@aha.video</a>.</p>"
        },
        {
            "id":10,
            "section":"Plans & Payments",
            "question":"How do I use a promo code?",
            "answer":"<p class=\"faq-text\">Login to your account.<br>Click on subscribe now in the Menu.<br>Select your required plan.<br>Enter the promo code under \"Enter Coupon Code\" to avail the offer</p>"
        },
        {
            "id":11,
            "section":"Plans & Payments",
            "question":"How do I use a redeem code?",
            "answer":"<p class=\"faq-text\">Go to <a href=\"/redeem\" class=\"faq-link\">www.aha.video/redeem</a> in the browser either in Desktop or Mobile.<br>If you are an existing user, please login with your previously used login credentials / If you are a new user, please login using mobile number.<br>Enter the redeem coupon code in the field provided and click on Apply.<br>Once the coupon is validated, then click on Proceed.<br>You will be redirected to the home page with a subscription activated on your account.</p>"
        },
        {
            "id":12,
            "section":"Plans & Payments",
            "question":"Can I change the payment after the subscription for further renewal?",
            "answer":"<p class=\"faq-text\">Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click Subscription Details<br>Click Edit Payment</p>"
        },
        {
            "id":13,
            "section":"Plans & Payments",
            "question":"How do I review my billing history/payment details on aha?",
            "answer":"<p class=\"faq-text\">You can check your billing/payment history by logging into your account if you’re not logged in already.<br><br><b>iOS/Android App:</b><br>Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click Subscription Details<br><br><b>Web Browser/Mobile Browser:</b><br>Click the profile icon located at the top-right corner.<br>Click Settings.<br>Click Subscription Details<br><br><b>TV:</b><br>Open Settings through the left menu.<br>Click Subscription Details<br><br>* iPhone users can see their payment history on iTunes.</p>"
        },
        {
            "id":14,
            "section":"Plans & Payments",
            "question":"How can I upgrade my Plan?",
            "answer":"<p class=\"faq-text\">Click the Menu located at the bottom-right corner.<br>Click Settings.<br>Click Subscription Details<br>Click Upgrade plan<br><br>* Below are the applicable use cases in plan upgradation<br>Telugu Quarterly Plan to Telugu Annual Plan<br>Telugu Quarterly Plan to Telugu Annual Premium<br>Telugu Quarterly Plan to aha GOLD<br>Telugu Annual Plan to Telugu Annual Premium<br>Telugu Annual Plan to aha GOLD<br>Tamil Quarterly Plan to Tamil Annual Plan<br>Tamil Quarterly Plan to aha GOLD<br>Tamil Annual Plan to aha GOLD<br>Telugu Mobile Quarterly plan to Telugu Quarterly Plan<br>Telugu Mobile Quarterly Plan to Telugu Annual Plan<br>Telugu Mobile Quarterly Plan to Telugu Annual Premium<br>Telugu Mobile Quarterly Plan to aha GOLD<br><br>* You can only do this during your active subscription period and you will be charged on pro rata basis. Once you upgrade, your subscription validity will be adjusted as per the pack you have upgraded to and the number of days used in your current subscription.<br>** Upgrade of plans is available only in mobile and desktop.<br>Note: Users with Amazon Fire TV In-App Purchase/Roku Pay/ Partner coupon purchases cannot upgrade plans.</p>"
        },
        
    
    
    
        {
            "id":15,
            "section":"Creating an account",
            "question":"aha - what is it about?",
            "answer":"<p class=\"faq-text\">aha is an entertainment app with a curated catalogue of telugu and tamil content. It is packed with the latest and classic movies, talk shows and original web series unique to the platform.<br>You can watch it anytime with unlimited access to subscribing to the platform. Get aha app now.</p>"
        },
        {
            "id":16,
            "section":"Creating an account",
            "question":"What is the process to install aha?",
            "answer":"<p class=\"faq-text\"><b>Android:</b><br>Open Google Play Store on your android mobile phone<br>Search for aha<br>Click on Install to start the download<br><br><b>iOS:</b><br>Open Apple App Store on your iPhone<br>Search for aha<br>Click on Install to start the download<br><br><b>Android TV:</b><br>Download the television app for Android TV OS by searching aha in the Play Store on Android TV<br><br><b>Apple TV:</b><br>Download the television app for Apple TV by searching aha in the App Store on Apple TV<br><br><b>Samsung TV:</b><br>Download the aha app from the Samsung TV app store<br><br><b>LG TV:</b><br>Download the aha app from the LG TV app store<br><br><b>Amazon Fire TV:</b><br>Go to Fire TV Home page<br>Click on search icon on the top-left and search for aha<br>Click on get to Download<br><br><b>Roku TV:</b><br>In the Home screen, click on Channel Store, then Movies &amp; TV<br>Search for aha<br>Click Add Channel, then go to channel</p>"
        },
        {
            "id":17,
            "section":"Creating an account",
            "question":"How do I sign up for aha on mobile and website?",
            "answer":"<p class=\"faq-text\">You may sign up for aha by entering mobile number and successfully verifying the OTP (OR) by entering email address and password.</p>"
        },
        {
            "id":18,
            "section":"Creating an account",
            "question":"How do I activate aha on Tv",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to activate Aha on TV:<br><br><b>iOS/Android App:</b><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click on Link a Device.<br>You can either scan the QR code through the app (or) Enter the code on the mobile app that is displayed on Tv.<br><br><b>Web Browser/ Mobile Browser:</b><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click profile icon located at the top-right corner.<br>Click on Link a Device.<br>You can either scan the QR code through the app (or) Enter the code on the mobile app that is displayed on Tv</p>"
        },
        {
            "id":19,
            "section":"Creating an account",
            "question":"How do I subscribe to aha on mobile and website?",
            "answer":"<p class=\"faq-text\">Login to aha<br>Click subscribe now<br>Select the Plan of your choice<br>Enter the promo code if you have any<br>Select your preferred payment method.<br>Complete the payment process and Your subscription will be activated</p>"
        },
        {
            "id":20,
            "section":"Creating an account",
            "question":"How do I subscribe to aha on Tv?",
            "answer":"<p class=\"faq-text\">Login to aha<br>Click subscribe now<br>Select the Plan of your choice<br>You can either scan the QR Code through any UPI(Phone Pe, Google Pay, Paytm, BHIM etc.) to make the payment or click on Send a payment link which will send the payment link to the registered mobile number through which the payment can be made.<br>Complete the payment process and Your subscription will be activated</p>"
        },
    
    
    
    
        {
            "id":21,
            "section":"Devices",
            "question":"What are the different devices that aha can be streamed on?",
            "answer":"\"<p class=\\\"faq-text\\\">aha works best with the below minimum system requirement:<br>- Android 7.1<br>- iOS 12.0<br>- iPadOS 13.0<br>- Last 3 major versions of browsers<br>- Internet Explorer Windows 8.1 64 bit<br>- Android TV: Android 6.0<br>- Apple TV: tvOS 12.0<br>- Samsung TV: 2019 models and onward<br>- LG TV: 2019 models and onward<br>- Amazon Fire TV: Gen 3 and above<br>- Roku: Roku OS 9</p>\""
        },
        {
            "id":22,
            "section":"Devices",
            "question":"What are the system requirements for installing aha?",
            "answer":"<p class=\"faq-text\">aha works best with the below minimum system requirement:<br>- Android 7.1<br>- iOS 12.0<br>- iPadOS 13.0<br>- Last 3 major versions of browsers<br>- Internet Explorer Windows 8.1 64 bit<br>- Android TV: Android 6.0<br>- Apple TV: tvOS 12.0<br>- Samsung TV: 2019 models and onward<br>- LG TV: 2019 models and onward<br>- Amazon Fire TV: Gen 3 and above<br>- Roku: Roku OS 9</p>"
        },
        {
            "id":23,
            "section":"Devices",
            "question":"How many devices can a user log in from a single account and play content simultaneously?",
            "answer":"<p class=\"faq-text\">Except in the cases listed below, a user can log in to up to 5 devices with a single account and play two streams at the same time.<br><br>Indian Aha Gold subscribers can play up to three streams simultaneously.<br><br>Indian Telugu Mobile Quarterly subscribers can play only one stream at a time.</p>"
        },
        {
            "id":24,
            "section":"Devices",
            "question":"What would happen if I exhaust the device limit?",
            "answer":"<p class=\"faq-text\">Once you reach your device limit, you'll see a pop up on the newest device when you try to login, \"To continue signing in, remove your account from any other device.\"<br>Sign out from one of the logged in devices to login into a new device.</p>"
        },
        {
            "id":25,
            "section":"Devices",
            "question":"How do I delete a device?",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to change your existing password:<br><br><b>iOS/Android App:</b><br><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click on Device Management.<br>Click the Delete icon(Bin) adjacent to the device.<br><br><b>Web Browser/Mobile browser:<b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click the Profile icon in the top-right corner.<br>Click on Device Management.<br>Click the Delete icon(Bin) adjacent to the device.</b></b></p>"
        },
        {
            "id":26,
            "section":"Devices",
            "question":"Can I watch the content on multiple devices with the paid plans?",
            "answer":"<p class=\"faq-text\">Yes, with the paid plans, you can access the content on up to 5 devices. This includes mobile phones, TV screens, iPads, or tablets. You can enjoy the content on multiple devices simultaneously, providing flexibility in how and where you watch. Do note that the Telugu Quarterly Mobile pack can only be used for streaming on one mobile device.</p>"
        },
    
    
    
    
    
    
        {
            "id":27,
            "section":"Mt Account",
            "question":"How do I edit my Profile/ Email Id/Phone Number?",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to Edit your Profile<br><br><b>iOS/Android App:</b><br><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click the Edit icon adjacent to the profile name<br><br><b>Web Browser/Mobile Browser:</b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click the Profile icon in the top-right corner.<br>Click Settings.<br>Click the Edit icon adjacent to the profile name<br><br>* Profile details cannot be edited on the Android TV app.</p>"
        },
        {
            "id":28,
            "section":"Mt Account",
            "question":"How do I change my existing password?",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to change your existing password:<br><br><b>iOS/Android App:</b><br><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click Change Password.<br><br><b>Web Browser/Mobile Browser:</b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click the Profile icon in the top-right corner.<br>Click Settings.<br>Click Change Password.<br><br>* Profile details cannot be edited on the Android TV app.</p>"
        },
        {
            "id":29,
            "section":"Mt Account",
            "question":"How do I reset/recover my password if I have forgotten it?",
            "answer":"<p class=\"faq-text\">Use the \"Forgot Password\" option available on the app and website while logging in.<br>If you have logged in using GOOGLE/FACEBOOK, please contact us at <a href=\"mailto:support@aha.video\" class=\"faq-link\">support@aha.video</a> for assistance.</p>"
        },
        {
            "id":30,
            "section":"Mt Account",
            "question":"How do I sign out of my account?",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to change your existing password:<br><br><b>iOS/Android App:</b><br><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click Log Out.<br><br><b>Web Browser/Mobile Browser:</b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click the Profile icon in the top-right corner.<br>Click Log Out</p>"
        },
        {
            "id":31,
            "section":"Mt Account",
            "question":"How can you get the invoice of your subscription?",
            "answer":"<p class=\"faq-text\">You can check your billing/payment history by logging into your account if you’re not logged in already.<br><br><b>Android/iOS App:</b><br>Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click Subscription Details<br>Click View Invoice and download preferred invoice.<br><br><b>Web Browser/Mobile Browser:</b><br>Click the profile icon in the top-right corner.<br>Click Settings.<br>Click Subscription Details<br>Click View Invoice and download preferred invoice.</p>"
        },
        {
            "id":32,
            "section":"Mt Account",
            "question":"How can I upgrade my Plan?",
            "answer":"<p class=\"faq-text\">Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click Subscription Details<br>Click Upgrade plan<br><br>* Below are the applicable use cases in plan upgradation<br>Telugu Quarterly Plan to Telugu Annual Plan<br>Tamil Quarterly Plan to Tamil Annual Plan<br><br>* You can only do this during your active subscription period and you will be charged on pro rata basis. Once you upgrade, your subscription validity will be adjusted as per the pack you have upgraded to and the number of days used in your current subscription</p>"
        },
        {
            "id":33,
            "section":"Mt Account",
            "question":"How do I cancel my auto renewal process for aha?",
            "answer":"<p class=\"faq-text\">Click Menu located at the bottom-right corner.<br>Click Settings.<br>Click Subscription Details<br>Click Cancel Subscription<br><br>* User will be able to continue watching premium content till the expiry date of current subscription plan</p>"
        },
        {
            "id":34,
            "section":"Mt Account",
            "question":"I am not able to access my account. Please help.",
            "answer":"<p class=\"faq-text\">Please check if you are using your registered email address or mobile number to log in. Also, make sure you are using the correct password. If you cannot log in, try changing your password by following the instructions here. If you are registered using your Facebook or Google, make sure you log in using the same ID. If you are still not able to log in, please contact us at <a href=\"mailto:support@aha.video\" class=\"faq-link\">support@aha.video</a> and we'll help you resolve your query.</p>"
        },
        
    
    
    
    
    
        {
            "id":35,
            "section":"Language",
            "question":"What does Display language mean?",
            "answer":"<p class=\"faq-text\">Display Language is the language in which a user will read the text in the app.<br>Eg: If the Display language is selected as Telugu, complete app information such as settings, Menu and other options will be in telugu</p>"
        },
        {
            "id":36,
            "section":"Language",
            "question":"What does Content language mean?",
            "answer":"<p class=\"faq-text\">Content Language is the language in which a user streams the content.<br>Eg: If you select the content Language as Telugu. All the telugu catalogue will be shown to the user</p>"
        },
        {
            "id":37,
            "section":"Language",
            "question":"How to update Content and Display Language?",
            "answer":"<p class=\"faq-text\">You can edit content and display language by following the below steps:<br><br><b>iOS/Android App:</b><br><br>Click Language icon at the top-right corner.<br>Select content language and display language from the available languages.<br>Click on Save.<br><br><b>Web Browser/Mobile Browser:</b><br><br>Click the Language icon at the top-right corner of the screen.<br>Select content language and display language from the available languages.<br>Click on Save.<br><br><b>TV:</b><br><br>Click the Language icon in the menu on the left side.<br>Select content language and display language from the available languages.</p>"
        },
    
    
    
    
    
    
        {
            "id":38,
            "section":"Content Related",
            "question":"What content can I watch on aha?",
            "answer":"<p class=\"faq-text\">In aha, you can watch the latest and classic movies, short films, original web series unique to the platform. </p>"
        },
        {
            "id":39,
            "section":"Content Related",
            "question":"How do I search for a show or movie on aha?",
            "answer":"<p class=\"faq-text\">You can follow the below steps to search for a content on aha:<br><br><b>Android/iOS App:</b><br><br>Open aha app<br>Click on Search icon at the bottom of the screen<br>Enter the content title and select the preferred content from the search results<br><br><b>Web Browser/ Mobile Browser:</b><br><br>Open <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Click on Search icon in the top right.<br>Enter the content title and select the preferred content from the search results<br><br><b>TV:</b><br><br>Open aha app<br>Click on Search icon in the menu on the left side of the screen.<br>Enter the content title and select the preferred content from the search results</p>"
        },
        {
            "id":40,
            "section":"Content Related",
            "question":"Are all the videos on aha in HD?",
            "answer":"<p class=\"faq-text\">Yes, all the videos are in HD</p>"
        },
        {
            "id":41,
            "section":"Content Related",
            "question":"Are subtitles available on all the aha content?",
            "answer":"<p class=\"faq-text\">We have subtitles available with most of our content. You can check the availability of subtitles of a content if you see the Subtitles option in the player while streaming.</p>"
        },
        {
            "id":42,
            "section":"Content Related",
            "question":"How do I turn on/off subtitles?",
            "answer":"<p class=\"faq-text\">Below are the steps to turn on the subtitles:<br><br>Click on the video you wish to watch.<br>Click on Subtitles option located at the bottom of the player.<br>Select your preferred language to turn on the subtitles or select Off to turn off the subtitles.</p>"
        },
        {
            "id":43,
            "section":"Content Related",
            "question":"Can I watch the content on aha offline?",
            "answer":"<p class=\"faq-text\">Yes, you can download the content available on aha app and watch it offline.<br><br>* Download feature is available only in mobile app.</p>"
        },
        {
            "id":44,
            "section":"Content Related",
            "question":"How do I download a content on aha?",
            "answer":"<p class=\"faq-text\">Below are the steps to download content on aha app:<br><br>Click on the content you wish to download.<br>Click on Download icon if it is available on the content detail page.<br>Select the download quality. You can also make this your default setting by selecting the option \"Keep this my default download quality.\" This will disable the prompt to choose a quality each time you download a video.<br>* Download feature is available only in mobile app.</p>"
        },
        {
            "id":45,
            "section":"Content Related",
            "question":"How do I watch the downloaded content?",
            "answer":"<p class=\"faq-text\">Below are the steps to watch the downloaded content on aha app:<br><br>Open the Aha app.<br>Click the Downloads icon at the bottom .<br>Click on the Play icon adjacent to your preferred content to start watching.<br><br>* Download feature is available only in mobile app.</p>"
        },
        {
            "id":46,
            "section":"Content Related",
            "question":"How do I change the download quality?",
            "answer":"<p class=\"faq-text\">To change download quality:<br><br>Login to aha<br>Click on Menu located at the bottom-right corner.<br>Click on Settings<br>Click on App Settings<br>Click Download Settings and select your preferred quality.</p>"
        },
        {
            "id":47,
            "section":"Content Related",
            "question":"For how long will content downloaded from aha be available to me?",
            "answer":"<p class=\"faq-text\">Downloaded content will be automatically deleted 30 days from downloading.</p>"
        },
        {
            "id":48,
            "section":"Content Related",
            "question":"Is the downloaded content from aha be available for transfer to other devices?",
            "answer":"<p class=\"faq-text\">We do not provide the facility to transfer the downloaded content to external devices. It is only available to view on the app.</p>"
        },
        {
            "id":49,
            "section":"Content Related",
            "question":"Can I stop/pause when a content is being downloaded?",
            "answer":"<p class=\"faq-text\">Yes. You can stop/pause any content being downloaded from the downloads section located at the bottom.</p>"
        },
        {
            "id":50,
            "section":"Content Related",
            "question":"How can I remove the downloaded Content?",
            "answer":"<p class=\"faq-text\">Below are the steps to remove the downloaded content:<br><br>Open the Aha app.<br>Click the Downloads icon at the bottom .<br>Click on the Delete icon adjacent to the content to delete it from Downloads.</p>"
        },
        {
            "id":51,
            "section":"Content Related",
            "question":"How can I add content to my watchlist?",
            "answer":"<p class=\"faq-text\">To access the Watchlist feature, you'll need to be logged in to aha. This allows you to access your Watchlist on any device you're logged in to.<br>You can follow the below steps to add a content your watchlist:<br><br><b>Android/iOS App:</b><br><br>Open aha app<br>Login to your account<br>Click on any content<br>Click on Plus(+) icon to add the content to the watchlist.<br><br><b>Web Browser/ Mobile Browser:</b><br><br>Open <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account<br>Click on any content<br>Click on Plus(+) icon to add the content to the watchlist.<br><br><b>TV:</b><br><br>Open aha app<br>Login to your account<br>Click on any content<br>Click on +Add to Watchlist to add the content to the watchlist.</p>"
        },
        {
            "id":52,
            "section":"Content Related",
            "question":"How can I find my watchlist?",
            "answer":"<p class=\"faq-text\">To access the Watchlist feature, you'll need to be logged in to aha. This allows you to access your Watchlist on any device you're logged in to.<br>You can follow the below steps to view the watchlisted content:<br><br><b>Android/iOS App:</b><br><br>Open aha app<br>Login to your account<br>Click on the Watchlist(+ icon) located at the bottom of the screen to view the watchlisted content<br><br><b>Web Browser/ Mobile Browser:</b><br><br>Open <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account<br>Click on profile icon at the top right corner<br>Click on the Watchlist(+ icon) to view the watchlisted content<br><br><b>TV:</b><br><br>Open aha app<br>Login to your account<br>Navigate to the menu on the left side<br>Click on Watchlist to  view the watchlisted content.</p>"
        },
        {
            "id":53,
            "section":"Content Related",
            "question":"How to Remove content from watchlist?",
            "answer":"<p class=\"faq-text\">To access the Watchlist feature, you'll need to be logged in to aha. This allows you to access your Watchlist on any device you're logged in to.<br>You can follow the below steps to remove a content your watchlist:<br><b>Android/iOS App:</b><br><br>Open aha app<br>Login to your account<br>Click on any content<br>Click on Minus(-) icon to remove the content from the watchlist.<br><br>(OR)<br><br>Click on watchlist icon(+) located at the bottom of the screen<br>Click on delete icon(bin) adjacent to the content you want to remove from the watchlist.<br><br><b>Web Browser/ Mobile Browser:</b><br><br>Open <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account<br>Click on any content<br>Click on Minus(-) icon to remove the content from the watchlist.<br><br>(OR)<br><br>Click on watchlist icon(+)<br>Click on delete icon(bin) adjacent to the content you want to remove from the watchlist.<br><br><b>TV:</b><br><br>Open aha app<br>Login to your account<br>Click on any content<br>Click on Remove from Watchlist to remove the content from the watchlist.<br><br>(OR)<br><br>Click on watchlist icon(+) located in the menu on the right side of the screen.<br>Click on delete icon(bin) adjacent to the content you want to remove from the watchlist.</p>"
        },
        {
            "id":54,
            "section":"Content Related",
            "question":"What is DRM?",
            "answer":"<p class=\"faq-text\">DRM stands for Digital Rights Management. This ensures that the content is not copied, transferred or modified in any manner. Our DRM protected content will not be available in incognito/private mode of the web browser as this mode prevents streaming content in a secured environment. Hence we suggest you play on the standard model.</p>"
        },
        {
            "id":55,
            "section":"Content Related",
            "question":"What is the video streaming quality for available plans?",
            "answer":"<p class=\"faq-text\">Video quality while streaming content will be HD for Monthly/Mobile Quarterly/Quarterly/Annual plan/Annual Premium users.<br>aha GOLD users will be able to enjoy 4K content, if the content is available in 4K.<br><b>NOTE:</b> Not all contents are available in 4K. Users will be able to stream 4K content only on supported TVs.</p>"
        },
        {
            "id":56,
            "section":"Content Related",
            "question":"What is the audio quality for available plans?",
            "answer":"<p class=\"faq-text\">Audio quality while streaming content will be Stereo (2.1) for Monthly/Mobile Quarterly/Quarterly/Annual plan/Annual Premium users.<br>aha GOLD users will be able to enjoy content in 5.1 or Dolby 5.1, if the content is available in 5.1 or Dolby 5.1<br><b>NOTE:</b> Not all contents are available in 5.1 or Dolby 5.1. We will be rolling this out to more content shortly.</p>"
        },
        {
            "id":57,
            "section":"Content Related",
            "question":"How to identify if the content is available is in 4K and 5.1/Dolby 5.1?",
            "answer":"<p class=\"faq-text\">When you click on content, If the 4K/5.1/Dolby 5.1 tag is available on the top of the content, then the content can be streamed in respective video and audio qualities provided the hardware is compatible.</p>"
        },
        {
            "id":58,
            "section":"Content Related",
            "question":"Can I access the content on the platform for free?",
            "answer":"<p class=\"faq-text\">Yes, you can access the content on the platform for free without any cost. Simply visit the platform and start streaming the available free content. However, if you wish to access the paid content, you will need to subscribe to one of the various plans available here <a href=\"/subscription/viewplans\" class=\"faq-link\">View Plans</a>. It's important to note that while the free content is accessible without charges, it is accompanied by personalized ads during streaming.</p>"
        },
        {
            "id":59,
            "section":"Content Related",
            "question":"How can I access the paid content on the platform?",
            "answer":"<p class=\"faq-text\">To access the paid content, you need to subscribe to one of the available plans on the platform. These plans allow you to stream the paid content, but please be aware that personalized ads will be displayed during streaming. For ad free experience, please subscribe to the Aha gold plan which allows unlimited access to Telugu and Tamil Movies, as well as Web series, without any advertisements.</p>"
        },
        {
            "id":60,
            "section":"Content Related",
            "question":"Why am I still seeing ads after subscribing to the platform?",
            "answer":"<p class=\"faq-text\">When you subscribe to the platform, you gain access to the paid content, which includes unlimited streaming of 100% content available on the platform. Do note that the paid plans on  the platform include integrated personalized ads during streaming. These ads help support the platform and provide the means to continue offering a wide range of content to our subscribers. For ad free experience, please subscribe to the Aha gold plan which allows unlimited access to Telugu and Tamil Movies, as well as Web series, without any advertisements.</p>"
        },
    
    
    
    
    
    
    
        {
            "id":61,
            "section":"Parental Control",
            "question":"What is Parental Control ?",
            "answer":"<p class=\"faq-text\">Our Parental Control option lets you restrict certain videos to be displayed on aha, based on the age of the viewing restriction set.<br>When you set a maturity rating for a profile, that profile will see only TV shows and movies that fit that rating.<br><b>Eg:</b> Your child is under 13 years of age and wants to watch any kids content. In this case, you can set the age restriction to 'U/A 13+' and then set your Parental Control PIN. This way, if your child clicks on any content with age restriction 13 or more, he/she will be asked to enter the Parental Control PIN.</p>"
        },
        {
            "id":62,
            "section":"Parental Control",
            "question":"What are the viewing restrictions of the profiles?",
            "answer":"<p class=\"faq-text\">We create 3 profiles on registration with the below default viewing restriction for each profile<br>- Default Primary Profile: U/A 16+<br>- Family Profile: U/A 13+<br>- Kids Profile: U<br><br>* These restrictions can be edited from the Parental Control tab under settings in Menu as per your convenience.<br>* When you set a maturity rating for a profile, that profile will see only TV shows and movies that fit that rating.</p>"
        },
        {
            "id":63,
            "section":"Parental Control",
            "question":"How can I enable Parental Control",
            "answer":"<p class=\"faq-text\">To change Parental Control:<br><br><b>iOS/Android App:</b><br><br>Login to aha if you're not logged in already.<br>Click on Menu located at the bottom-right corner.<br>Click on Settings<br>Click Parental Control<br>You will be asked to authorize your account. Please submit your account details (login credentials)<br>Click Enable Parental Control<br>Set a 4 Digit PIN<br>Set the preferred viewing restriction for each profile<br><br><b>Web Browser/ Mobile Browser:</b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click on the Profile icon in the top-right corner.<br>Click Parental Control<br>You will be asked to authorize your account. Please submit your account details (login credentials)<br>Click Enable Parental Control<br>Set a 4 Digit PIN<br>Set the preferred viewing restriction for each profile<br><br>* Parental Control settings cannot be edited through TV</p>"
        },
    
    
    
    
    
    
    
    
    
    
        {
            "id":64,
            "section":"User Profiles",
            "question":"What are Profiles in aha?",
            "answer":"<p class=\"faq-text\">Aha allows you to create and manage multiple profiles with one active account with content personalized separately to each profile.<br>You can have upto five user profiles with three profiles created by default on registration(a default primary profile, a kid's profile and a family profile) and a provision to add two more profiles. These profiles can be managed under \"User Profiles\" tab in Settings.</p>"
        },
        {
            "id":65,
            "section":"User Profiles",
            "question":"What is Kid's Profile?",
            "answer":"<p class=\"faq-text\">Aha makes sure that only age-appropriate TV shows and movies (with maturity rating 7 and under) are visible in Kids profile.<br>Search results and search suggestions will also be filtered.</p>"
        },
        {
            "id":66,
            "section":"User Profiles",
            "question":"How can I create a profile?",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to create the profile:<br><br><b>iOS/Android App:</b><br><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click on Settings.<br>Click on User Profiles.<br>Click on Add Profile to create a new profile.<br><br><b>Web Browser/ Mobile Browser:</b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click on the Profile icon in the top-right corner.<br>Click on User Profiles<br>Click on Add Profile to create a new profile<br><br><b>TV:</b><br><br>Login to your account if you're not logged in already.<br>Click on the Profile icon in the top-left corner.<br>Click on User Profiles<br>Click on Add Profile to create a new profile.</p>"
        },
        {
            "id":67,
            "section":"User Profiles",
            "question":"How can I edit a profile ?",
            "answer":"<p class=\"faq-text\">You can follow any of the below steps to edit the profile:<br><br><b>iOS/Android App:</b><br><br>Open the aha App.<br>Click Menu located at the bottom-right corner.<br>Click on Settings.<br>Click on User Profiles.<br>Click on Edit icon adjacent to the profile that you want to edit.<br><br><b>Web Browser/Mobile Browser:</b><br><br>Go to <a href=\"https://www.aha.video\" target=\"_blank\" class=\"faq-link\">www.aha.video</a><br>Login to your account if you’re not logged in already.<br>Click on the Profile icon in the top-right corner.<br>Click on User Profiles<br>Click on Edit icon adjacent to the profile that you want to edit.<br><b>TV:<b><br><br>Login to your account if you're not logged in already.<br>Click on the Profile icon in the top-left corner.<br>Click on User Profiles<br>Click on Manage Profile adjacent to the profile that you want to edit.</b></b></p>"
        }
    
    
    ]

    const sectionsContainer = document.getElementById('sections');
    const accordionContainer = document.getElementById('accordion');
    const backButton = document.createElement('button');
    backButton.id = 'back-button';
    backButton.style.display = 'none';
    accordionContainer.insertBefore(backButton, accordionContainer.firstChild);

    const sections = [...new Set(faqData.map(item => item.section))];

    // Populate sections
    sections.forEach((section, index) => {
        const sectionElement = document.createElement('div');
        sectionElement.classList.add('section-item');
        sectionElement.innerHTML = `${section} <span class="arrow1"></span>`;
        sectionElement.addEventListener('click', () => {
            displayQuestions(section);
            setActiveSection(sectionElement);
            if (window.innerWidth < 768) {
                sectionsContainer.style.display = 'none';
                accordionContainer.style.display = 'block';
                backButton.style.display = 'block';
            }
        });
        sectionsContainer.appendChild(sectionElement);
    });

    backButton.addEventListener('click', () => {
        sectionsContainer.style.display = 'flex';
        accordionContainer.style.display = 'none';
        backButton.style.display = 'none';
    });

    function displayQuestions(selectedSection) {
        accordionContainer.innerHTML = '';
        accordionContainer.appendChild(backButton);
    
        // Create and append the section heading
        if (window.innerWidth < 768) {
        const sectionHeading = document.createElement('h2');
        sectionHeading.textContent = selectedSection;
        sectionHeading.style.textAlign = 'center';
        accordionContainer.appendChild(sectionHeading);
        }
        const filteredData = faqData.filter(item => item.section === selectedSection);
    
        filteredData.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.classList.add('accordion-item');
    
            const questionElement = document.createElement('div');
            questionElement.classList.add('question-container');
            questionElement.textContent = item.question;
    
            const arrowElement = document.createElement('span');
            arrowElement.classList.add('arrow');
            questionElement.appendChild(arrowElement);
    
            itemElement.appendChild(questionElement);
    
            const answerElement = document.createElement('div');
            answerElement.classList.add('accordion-content');
            answerElement.innerHTML = item.answer;
            itemElement.appendChild(answerElement);
    
            itemElement.addEventListener('click', () => toggleAnswer(itemElement));
    
            accordionContainer.appendChild(itemElement);
        });
    }
    

    function setActiveSection(activeElement) {
        document.querySelectorAll('.section-item').forEach(el => el.classList.remove('active'));
        activeElement.classList.add('active');
    }

    function toggleAnswer(itemElement) {
        const content = itemElement.querySelector('.accordion-content');
        const isActive = itemElement.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(el => {
            if (el !== itemElement) {
                el.classList.remove('active');
                el.querySelector('.accordion-content').style.display = 'none';
            }
        });

        if (!isActive) {
            itemElement.classList.add('active');
            content.style.display = 'block';
        } else {
            itemElement.classList.remove('active');
            content.style.display = 'none';
        }
    }

    // Handle responsiveness
    function handleResponsiveness() {
        if (window.innerWidth < 768) {
            sectionsContainer.style.display = 'flex';
            sectionsContainer.style.padding = '30px';


            accordionContainer.style.display = 'none';
            backButton.style.display = 'none';
        } else {
            sectionsContainer.style.display = 'flex';
            accordionContainer.style.display = 'block';
            backButton.style.display = 'none';
            displayQuestions(sections[0]);
            setActiveSection(document.querySelector('.section-item'));
        }
    }

    // Initial call to set the correct layout
    handleResponsiveness();

    // Listen for window resize events
    window.addEventListener('resize', handleResponsiveness);
});

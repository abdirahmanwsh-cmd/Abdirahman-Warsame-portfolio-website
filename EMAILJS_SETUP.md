# EmailJS Setup Instructions

To enable the contact form to send emails:

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email

## Step 2: Add Email Service
1. Go to "Email Services" in dashboard
2. Click "Add New Service"
3. Choose Gmail (or your preferred email provider)
4. Connect your email: Abdirahman.wsh@gmail.com
5. Copy the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

**Subject:** New Contact from {{from_name}}

**Content:**
```
You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Save and copy the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key**

## Step 5: Update Contact.jsx
Open `src/pages/Contact.jsx` and replace:
- `YOUR_SERVICE_ID` with your Service ID
- `YOUR_TEMPLATE_ID` with your Template ID
- `YOUR_PUBLIC_KEY` with your Public Key

## Done!
Your contact form will now send emails directly to Abdirahman.wsh@gmail.com

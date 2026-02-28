# Instagram Integration Setup Guide

## Overview
Your website now dynamically fetches photos from your Instagram account and displays them on:
- **Home Page**: 9 recent photos in a 3-column grid
- **Gallery Page**: 24 recent photos in a 4-column grid

Photos update automatically every hour and link directly to Instagram posts.

---

## Step 1: Create Instagram App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click **"My Apps"** → **"Create App"**
3. Select **"Consumer"** as app type
4. Fill in app details:
   - **App Name**: Celestial Church FUTA Website
   - **Contact Email**: Your church email
5. Click **"Create App"**

---

## Step 2: Add Instagram Basic Display

1. In your app dashboard, click **"Add Product"**
2. Find **"Instagram Basic Display"** and click **"Set Up"**
3. Scroll to **"User Token Generator"**
4. Click **"Add or Remove Instagram Testers"**
5. Add your Instagram account username
6. Click **"Submit"**

---

## Step 3: Accept Tester Invite

1. Open Instagram app on your phone
2. Go to **Settings** → **Apps and Websites** → **Tester Invites**
3. Accept the invitation from your app

---

## Step 4: Generate Access Token

1. Return to Facebook Developers → Your App → Instagram Basic Display
2. Under **"User Token Generator"**, click **"Generate Token"**
3. Log in with your Instagram account
4. Authorize the app
5. **Copy the Access Token** (long string of characters)

---

## Step 5: Add Token to Your Website

### For Local Development:

Create a `.env.local` file in your project root:

```
INSTAGRAM_ACCESS_TOKEN=your_token_here
```

Replace `your_token_here` with your actual token.

### For Production (Vercel):

1. Go to your Vercel project dashboard
2. Click **"Settings"** → **"Environment Variables"**
3. Add new variable:
   - **Name**: `INSTAGRAM_ACCESS_TOKEN`
   - **Value**: Your Instagram token
   - **Environment**: Production, Preview, Development
4. Click **"Save"**
5. Redeploy your website

---

## Step 6: Update Instagram Username

Edit these files to replace the Instagram handle:

**File: `components/instagram-feed.tsx`**

Line 125: Change `@celestialchurchfuta` to your actual Instagram username:

```tsx
href="https://instagram.com/YOUR_USERNAME"
```

Line 136: Change button text:

```tsx
Follow @YOUR_USERNAME
```

---

## Step 7: Refresh Long-Lived Token (Every 60 Days)

Instagram tokens expire after 60 days. To refresh:

1. Go to this URL (replace YOUR_TOKEN):

```
https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_TOKEN
```

2. Copy the new token from the response
3. Update the `INSTAGRAM_ACCESS_TOKEN` environment variable
4. Redeploy if necessary

---

## Testing

### Local Testing:

```bash
npm run dev
```

Visit:
- http://localhost:3000 (home page)
- http://localhost:3000/gallery (full gallery)

### API Testing:

```bash
curl http://localhost:3000/api/instagram?limit=9
```

Should return your Instagram posts in JSON format.

---

## Fallback Behavior

If Instagram API fails (token expired, network error, etc.):
- Website will display your uploaded church photos instead
- No errors shown to visitors
- Check browser console for debug messages: `[v0] Instagram fetch error`

---

## Troubleshooting

### Token Not Working:
- Verify token is correctly copied (no spaces)
- Ensure Instagram account is public or properly authorized
- Check if tester invite was accepted

### Photos Not Updating:
- Cache refreshes every hour
- Clear browser cache
- Redeploy website to force update

### API Rate Limits:
- Instagram allows 200 requests per hour
- Website caches results to minimize requests

---

## Important Notes

1. **Token Security**: Never commit `.env.local` to Git
2. **Account Type**: Personal Instagram accounts work fine
3. **Photo Rights**: Only your own Instagram photos will display
4. **Performance**: Images load from Instagram CDN (fast)
5. **Mobile**: Fully responsive on all devices

---

## Support

If you encounter issues:
1. Check browser console for error messages
2. Verify environment variable is set correctly
3. Test API endpoint directly: `/api/instagram?limit=9`
4. Contact me with specific error messages

---

## Next Steps

After setup, your website will:
- ✅ Automatically show latest Instagram photos
- ✅ Update hourly without manual intervention
- ✅ Link photos back to Instagram posts
- ✅ Show "Follow" button with your handle
- ✅ Handle errors gracefully with fallback images

**Enjoy your dynamic Instagram-powered gallery!**
```

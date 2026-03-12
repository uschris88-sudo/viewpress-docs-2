# Subscription Billing System

## Overview

Build predictable recurring revenue with our Subscription Billing System! Enable your customers to subscribe for monthly, quarterly, or annual chocolate boxes and manage everything automatically.

---

## What is Subscription Billing?

Subscription Billing allows you to:
- 📦 Create unlimited subscription plans
- 💳 Charge customers automatically on a recurring basis
- 🔄 Manage plan upgrades, downgrades, and cancellations
- 📊 Track subscription metrics and retention rates
- 🎁 Offer free trials and promotional discounts
- ⚙️ Automate fulfillment workflows

---

## Creating Your First Subscription Plan

### Step 1: Define Your Plans

**Example: Chocolate Box Subscription Tiers**

```
Basic Chocolate Box
- Monthly subscription
- $29.99/month
- 3 assorted chocolate bars
- Free shipping

Premium Chocolate Box
- Monthly subscription
- $59.99/month
- 12 assorted chocolate bars
- 2 specialty chocolate pieces
- Free shipping + gift wrapping

Elite Chocolate Box
- Monthly subscription
- $99.99/month
- 20 premium chocolate pieces
- Exclusive flavors
- Priority support
```

### Step 2: Set Up Billing Cycle

1. Navigate to **Subscriptions → Plans**
2. Click "Create New Plan"
3. Set pricing and billing frequency (monthly, yearly, etc.)
4. Configure trial period (optional)
5. Add fulfillment details (what gets shipped)
6. Publish plan

### Step 3: Launch to Customers

Customers can subscribe:
- Via your website checkout
- Through a subscription link
- Using our embedded subscription widget
- Via your mobile app (with our SDK)

---

## Key Features

### 🎁 Free Trials
Attract new customers with free trial periods. Automatically charge after trial ends.

### 💰 Flexible Pricing
- Flat-rate pricing
- Usage-based pricing
- Tiered pricing tiers
- Volume discounts

### 🔄 Plan Changes
Customers can upgrade, downgrade, or switch plans anytime. We handle prorated charges automatically.

### 📅 Billing Flexibility
- Monthly, quarterly, annual billing
- Custom billing cycles
- Annual billing with monthly plans
- Mid-cycle changes

### 🎯 Retention Tools
- Dunning management (retry failed payments)
- Churn prevention incentives
- Win-back campaigns
- Pause & resume subscriptions

### 📧 Automated Communications
- Welcome emails
- Invoice delivery
- Payment failure alerts
- Renewal confirmations
- Churn notifications

---

## Subscription Lifecycle

```
Customer Subscribes
        ↓
Free Trial Period (optional)
        ↓
First Payment Charged
        ↓
Monthly/Yearly Renewal
        ↓
Auto-charge on Billing Date
        ↓
Invoice Generated & Sent
        ↓
Fulfillment (Ship chocolate box)
        ↓
[Customer Can: Upgrade | Downgrade | Cancel | Pause]
```

---

## API Example

```javascript
// Create subscription plan
const plan = await chocolate.plans.create({
  name: "Monthly Chocolate Box",
  amount: 2999, // $29.99
  currency: "usd",
  interval: "month",
  product: "monthly-subscription"
});

// Subscribe customer
const subscription = await chocolate.subscriptions.create({
  customer_id: "cust_12345",
  plan_id: plan.id,
  trial_days: 14 // 2-week free trial
});

// Handle renewal
webhook.on("charge.succeeded", (charge) => {
  // Ship new chocolate box automatically
  fulfillment.createOrder(charge.subscription);
});
```

---

## Best Practices

✨ **Offer multiple plan options** to suit different customer budgets  
✨ **Use free trials strategically** to reduce sign-up hesitation  
✨ **Communicate clearly** about what's included in each plan  
✨ **Make cancellations easy** to build trust  
✨ **Monitor churn rates** and respond with win-back offers  
✨ **Test different pricing** to optimize conversion  

---

## Common Subscription Models

### 📦 Monthly Chocolate Box
- Perfect for: Regular chocolate enthusiasts
- Billing: Monthly (e.g., $29.99)
- Contents: Curated assortment of chocolates

### 🎁 Quarterly Deluxe
- Perfect for: Gift givers and special occasions
- Billing: Quarterly (e.g., $74.99)
- Contents: Premium, exclusive chocolate selection

### 👑 Annual Premium Membership
- Perfect for: Loyal customers
- Billing: Annual (e.g., $99.99, save vs monthly)
- Perks: Early access to new flavors, member-only discounts

### 🏢 Corporate Subscription
- Perfect for: Businesses ordering for teams
- Billing: Quarterly or Annual
- Customization: Brand chocolate boxes with logos

---

## Managing Subscriptions

### Customer Self-Service Portal
Customers can:
- Update payment methods
- Change billing address
- Download invoices
- Manage plan selection
- Pause or resume subscription
- Cancel if needed

### Admin Dashboard Features
You can:
- View all active subscriptions
- Manually charge customers
- Issue credits or refunds
- Send payment reminders
- Manage subscription settings
- Export subscription data

---

## Retention Strategies

### Win-Back Campaigns
Reach out to cancelled subscribers with special offers to reactivate them.

### Pause Instead of Cancel
Allow customers to pause subscriptions instead of cancelling. They're more likely to resume!

### Upgrade Incentives
Offer limited-time upgrades to higher tiers with a discount.

### Loyalty Rewards
Reward long-term subscribers with exclusive flavors or discounts.

---

## Frequently Asked Questions

**Q: What if a payment fails?**  
A: We automatically retry failed payments up to 3 times over 4 days. You can configure dunning settings.

**Q: Can customers pause their subscription?**  
A: Yes! They can pause for 1-6 months, and the subscription resumes automatically.

**Q: How do prorated charges work?**  
A: If a customer upgrades mid-month, we calculate the difference and apply credits accordingly.

**Q: Can I offer annual discounts?**  
A: Absolutely! Set annual pricing lower than (monthly × 12) to incentivize yearly commitment.

**Q: What happens when a subscription expires?**  
A: It automatically renews unless the customer cancels. You can customize renewal behavior.

---

## Troubleshooting

**Subscription Not Charging?**
- Verify payment method is valid
- Check subscription status is "active"
- Review failed payment logs
- Contact support for manual investigation

**Customer Can't Change Plan?**
- Ensure plan change is allowed (some may be restricted)
- Check subscription status
- Verify customer hasn't cancelled
- Try different plan

---

## Next Steps

- 🚀 Create your first subscription plan today!
- 📖 Read about [Order Management](/help-center/order-management/)
- 📊 Learn [Sales Analytics](/help-center/analytics-reporting/) to track subscription metrics
- 💬 Contact our sales team for enterprise features

---

## Support

- 📧 Email: subscriptions@chocolateeatery.com
- 💬 Live Chat: Available in dashboard
- 📞 Phone: 1-800-SUB-CHOCO
- 🎓 Academy: Subscription masterclasses

**Ready to build recurring revenue?** Start your first subscription plan now! 🍫📈

# Order Management & Payment Processing

## Overview

The Order Management & Payment Processing system is the heart of The Chocolate Eatery platform. It enables you to accept orders from customers, process payments securely, and manage transactions all in one place!

---

## What is Order Management?

Order Management allows chocolate businesses to:
- ✅ Create and manage customer orders
- ✅ Accept payments from multiple channels
- ✅ Integrate with your website or mobile app
- ✅ Track order status in real-time
- ✅ Generate invoices automatically

---

## Getting Started

### Step 1: Set Up Your Payment Gateway

1. Log in to your Chocolate Eatery Dashboard
2. Navigate to **Settings → Payment Methods**
3. Select your preferred payment provider (Stripe, PayPal, Square)
4. Enter your API keys and configure your account
5. Enable payment processing with a single click

### Step 2: Create Your First Order

```
POST /api/orders
{
  "customer_name": "Sweet Tooth Sally",
  "email": "sally@example.com",
  "items": [
    {
      "product_id": "dark-choco-bar",
      "quantity": 5,
      "price": 12.99
    }
  ],
  "total_amount": 64.95
}
```

### Step 3: Process Payment

The system will automatically:
- Generate an invoice
- Send payment link to customer
- Track payment status
- Update order fulfillment status

---

## Key Features

### 💰 Multi-Currency Support
Accept payments in 150+ currencies. Customers pay in their preferred currency, and you receive funds in yours!

### 🔒 Bank-Level Security
PCI DSS Level 1 certified. All transactions are encrypted and secure.

### ⚡ Instant Settlements
Payments are processed instantly. Get your money in your account within 24 hours.

### 📱 Mobile & Web Friendly
Your customers can pay from any device. Our payment forms are fully responsive and optimized.

### 🔄 Recurring Billing Ready
Set up automatic payments for subscriptions. Perfect for subscription chocolate boxes!

---

## Common Use Cases

### E-Commerce Orders
Accept payments directly from your online chocolate shop and automatically generate shipping details.

### Corporate Gifts
Process bulk orders from businesses ordering chocolate gifts for their teams.

### Event Catering
Create custom orders for chocolate catering with deposit collection.

### Wholesale Orders
Manage wholesale customers with special pricing and payment terms.

---

## Payment Methods Accepted

- 💳 Credit/Debit Cards (Visa, Mastercard, Amex)
- 🏦 Bank Transfers (ACH, SEPA, Wire)
- 📱 Mobile Wallets (Apple Pay, Google Pay)
- 🌐 Digital Wallets (PayPal, Square Cash)
- 🎁 Gift Cards (Built-in)

---

## Best Practices

✨ **Always verify payment status** before shipping orders  
✨ **Send order confirmations** immediately after payment  
✨ **Keep customers updated** on order progress  
✨ **Use our webhook system** to automate workflows  
✨ **Monitor chargeback rates** and address issues quickly  

---

## Frequently Asked Questions

**Q: How long does it take to receive payments?**  
A: Most payments settle within 24-48 hours to your bank account.

**Q: What happens if a payment fails?**  
A: We automatically retry failed payments. You'll be notified, and the customer will receive a retry link.

**Q: Can I refund orders?**  
A: Yes! Issue refunds directly from your dashboard. They process immediately.

**Q: Do you support subscription billing?**  
A: Absolutely! Check out our **Subscription Billing System** for details.

---

## Troubleshooting

**Payment Not Going Through?**
- Check internet connection
- Verify payment method details
- Ensure sufficient funds
- Contact your bank if issues persist

**Invoice Not Generated?**
- Refresh the dashboard
- Check email spam folder
- Verify customer email is correct
- Contact support for manual generation

---

## API Documentation

For developers, we offer a complete REST API for order management:

```javascript
// Create an order
const order = await chocolate.orders.create({
  customer: "customer_id",
  items: [{ sku: "dark-bar-001", qty: 3 }],
  shipping: "standard"
});

// Process payment
const payment = await chocolate.payments.create({
  order_id: order.id,
  amount: 99.99,
  method: "card"
});
```

[View Full API Docs →](/)

---

## Need More Help?

- 📧 Email: support@chocolateeatery.com
- 💬 Chat: Live support in dashboard
- 📞 Phone: 1-800-CHOCO-PAY
- 🎓 Webinars: Weekly training sessions

**Next Steps:** Learn about [Subscription Billing](/help-center/subscription-billing/) to create recurring revenue!

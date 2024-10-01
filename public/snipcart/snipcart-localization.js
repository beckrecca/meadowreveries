document.addEventListener('snipcart.ready', function() {
  Snipcart.api.session.setLanguage('en', {
    cart: {
      shipping_taxes_calculated_at_checkout: "Shipping will be calculated at checkout."
    },
    discount_box: {
      promo_code: "Apply a discount coupon code",
      promo_code_placeholder: "Enter discount code",
      promocode_applied: "Discount applied!"
    },
    shipping_rates: {
      guaranteed_delivery_days: "Guaranteed to be delivered in %{guaranteedDaysToDelivery} day(s), once we prepare your item for shipment."
    },
    errors {
      promo_code_is_invalid: "Code is not valid",
      promocode_already_in_cart: "Code already applied",
      promocode_isnt_applicable: "Code does not apply to the items in this cart",
      promo_code_is_expired: "This code has expired",
      quantity_revised: "Oops! We checked our inventory and we don't have that many in stock. We've updated your cart."
    }
  });
});
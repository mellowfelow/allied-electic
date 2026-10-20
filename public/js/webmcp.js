(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "browse_products",
        description: "Browse ALLIED electric bikes and commercial vehicles by category",
        inputSchema: {
          type: "object",
          properties: { category: { type: "string" } }
        },
        execute: async ({ category }) => {
          const url = category
            ? `https://alliedelectricvehicles.com.au/#shop/${category}`
            : `https://alliedelectricvehicles.com.au/#shop`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "order_via_whatsapp",
        description: "Initiate a WhatsApp order enquiry. Minimum order $300 AUD. Human completes the order.",
        inputSchema: {
          type: "object",
          properties: { message: { type: "string" } }
        },
        execute: async ({ message }) => {
          const greeting = "Hi ALLIED ELECTRIC VEHICLES, ";
          const url = `https://wa.me/61892488555?text=${encodeURIComponent(greeting + (message || ''))}`;
          window.open(url, '_blank');
          return { url };
        }
      },
      {
        name: "read_blog",
        description: "Open the ALLIED electric vehicle blog and buying guides",
        inputSchema: {
          type: "object",
          properties: {}
        },
        execute: async () => {
          window.location.href = `https://alliedelectricvehicles.com.au/#blog`;
          return { url: `https://alliedelectricvehicles.com.au/#blog` };
        }
      }
    ]
  });
})();

(function () {
  if (typeof navigator === 'undefined' || !navigator.modelContext) return;
  navigator.modelContext.provideContext({
    tools: [
      {
        name: "search_products",
        description: "Search ALLIED ELECTRIC VEHICLES products by keyword, category, or price",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string" },
            category: { type: "string" },
            max_price: { type: "number" }
          }
        },
        execute: async ({ query, category, max_price }) => {
          const params = new URLSearchParams();
          if (query) params.set('q', query);
          if (category) params.set('category', category);
          if (max_price) params.set('max_price', max_price.toString());
          const res = await fetch(`https://alliedelectricvehicles.com.au/api/search?${params}`);
          return res.json();
        }
      },
      {
        name: "browse_products",
        description: "Browse products by category",
        inputSchema: {
          type: "object",
          properties: { category: { type: "string" } }
        },
        execute: async ({ category }) => {
          const url = category ? `https://alliedelectricvehicles.com.au/shop/${category}/` : `https://alliedelectricvehicles.com.au/shop/`;
          window.location.href = url;
          return { url };
        }
      },
      {
        name: "order_via_whatsapp",
        description: "Initiate a WhatsApp order. Minimum order $300 AUD. Human completes.",
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
        name: "get_wholesale_info",
        description: "Get corporate mining tender and volume fleet pricing",
        inputSchema: {
          type: "object",
          properties: {}
        },
        execute: async () => {
          window.location.href = `https://alliedelectricvehicles.com.au/wholesale/`;
          return { url: `https://alliedelectricvehicles.com.au/wholesale/` };
        }
      }
    ]
  });
})();

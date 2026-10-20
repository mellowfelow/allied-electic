# Auth.md

## Site: ALLIED ELECTRIC VEHICLES (ALLIED FORKLIFTS PTY LTD — ABN 66 060 256 377)

## Agent Registration
No authentication required. All product specifications, technical sheets, pricing, and catalog pages are publicly accessible to AI agents. This is a static site — there is no live API to register against.

## Public Resources
| Resource | URL |
|---|---|
| Product Catalog | https://alliedelectricvehicles.com.au/shop |
| About Allied | https://alliedelectricvehicles.com.au/about |
| Blog | https://alliedelectricvehicles.com.au/blog |
| FAQ | https://alliedelectricvehicles.com.au/faq |
| Contact | https://alliedelectricvehicles.com.au/contact |

## Authentication

```json
{
  "agent_auth": {
    "register_uri": null,
    "identity_types_supported": ["none"],
    "credential_types_supported": ["none"],
    "notes": "No authentication required. All resources are public. No live API exists to authenticate against."
  }
}
```

## Ordering
Human-in-the-loop required. Agents may browse products and summarize specifications. Order completion happens via the on-site checkout form, WhatsApp, or email — there is no programmatic ordering endpoint.

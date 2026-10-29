# Source archive conventions
- Keep panel permissions in public/permissions.js and enforce them in server auth as well as the browser navigation, so direct requests and visible controls use the same policy.
- Resolve current player roles for administrative sessions when a corresponding player account exists, so old admin sessions cannot bypass role changes.
- Viewing the team is separate from assigning roles; preserve the existing owner/creator-only assignment rules to prevent administrators escalating their own privileges.
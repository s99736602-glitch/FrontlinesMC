export const roleOrder = ['membro', 'adm', 'united_nations', 'owner', 'creator'];
export const roleLabels = { membro: 'Membro', adm: 'Administrador', united_nations: 'Nações Unidas', owner: 'Owner', creator: 'Criador', funder: 'Criador' };
export const roleRank = role => roleOrder.indexOf(role === 'funder' ? 'creator' : role);
export const rolesOf = user => [...new Set((Array.isArray(user?.roles) ? user.roles : [user?.role, user?.secondary_role, user?.secondaryRole]).filter(Boolean))];
const panelRoles = ['owner', 'creator', 'funder', 'adm'];
const privateRoles = ['owner', 'creator', 'funder'];
const generalSections = ['server', 'statistics', 'map', 'systems', 'nations', 'lore', 'news', 'minecraft', 'modpack', 'roles', 'bans'];
const privateSections = ['console', 'shop', 'community', 'orders'];
export const canAccessPanel = user => rolesOf(user).some(role => panelRoles.includes(role));
export function canViewSection(user, section) {
  if (!canAccessPanel(user)) return false;
  if (privateSections.includes(section)) return rolesOf(user).some(role => privateRoles.includes(role));
  return generalSections.includes(section);
}
import test from 'node:test';
import assert from 'node:assert/strict';
import { canAccessPanel, canViewSection, roleOrder } from '../public/permissions.js';

test('Only owner, creator and administrator may enter and see the four general groups', () => {
  for (const role of ['owner', 'creator', 'adm']) {
    assert.equal(canAccessPanel({ role }), true);
    for (const section of ['server', 'statistics', 'map', 'systems', 'nations', 'lore', 'news', 'minecraft', 'modpack', 'roles', 'bans']) assert.equal(canViewSection({ role }, section), true);
  }
  for (const role of ['membro', 'support', 'suporte', 'mod', 'united_nations', 'unknown']) {
    assert.equal(canAccessPanel({ role }), false);
    assert.equal(canViewSection({ role }, 'server'), false);
  }
});
test('Console and administrative store are only accessible to owner and creator', () => {
  for (const section of ['console', 'shop', 'community', 'orders']) {
    for (const role of ['owner', 'creator']) assert.equal(canViewSection({ role }, section), true);
    for (const role of ['adm', 'mod', 'support', 'membro', 'united_nations']) assert.equal(canViewSection({ role }, section), false);
  }
});
test('Support and mod cannot be assigned', () => {
  assert.equal(roleOrder.includes('support'), false);
  assert.equal(roleOrder.includes('suporte'), false);
  assert.equal(roleOrder.includes('mod'), false);
});
test('A permitted second role works and unknown sections fail closed', () => {
  assert.equal(canAccessPanel({ role: 'membro', secondary_role: 'adm' }), true);
  assert.equal(canViewSection({ role: 'adm', secondaryRole: 'owner' }, 'shop'), true);
  assert.equal(canViewSection({ roles: ['support', 'mod'] }, 'shop'), false);
  assert.equal(canViewSection({ role: 'owner' }, 'unknown'), false);
});
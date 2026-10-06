/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const letters = members
    .filter((member) => typeof member === 'string')
    .map((member) => member.trim())
    .filter((name) => name.length > 0)
    .map((name) => name.charAt(0).toUpperCase());

  return letters.sort().join('');
}

module.exports = {
  createDreamTeam
};

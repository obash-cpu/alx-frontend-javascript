// initializeRooms.js
const ClassRoom = require('./0-classroom.js');

function initializeRooms() {
  const roomSizes = [19, 20, 34];
  const rooms = roomSizes.map(size => new ClassRoom(size));
  return rooms;
}

module.exports = initializeRooms;

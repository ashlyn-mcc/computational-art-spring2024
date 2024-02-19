// holds the wave lines
let waves = [];

// holds the offsets for the wave and grass noise
let waveOffsets = [];
let grassOffsets = [];

// holds elements of the background scene
let skies = [];
let leaves = [];
let grasses = [];

// holds the leaves that fall from the tree
let fallingLeaves = [];
let numLeaves = 0;

// holds wind vectors for falling leaves
let wind = [];

// holds rotations for falling leaves
let rotation = [];

// offset for falling leaves
let offsets = [];

//pulls leaves downward
let downwardGravity;

// functions as the ground, pushes back against gravity
let upwardGravity;

// determines if leaves fall from tree
let leavesFall = false;

// stationary objects
let treeTrunk, cloud1, cloud2, cloud3;
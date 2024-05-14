const sala = [
    ["derick", "davi", "sarah", ],
    ["fernando", "fernanda", "felype"],
    ["vivi", "daniel", "nayra"]
];

console.log(sala);

let nome1 = sala[1][2]
let nome2 = sala[2][0]

console.log(nome1,'-', nome2);

sala[1][2] = "alice";
sala[2][0] = "gustavo";
sala[0][1] = "leslie";

console.log(sala);
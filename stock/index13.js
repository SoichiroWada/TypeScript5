//-------------------
// Intersection Type
//-------------------
// example with generic function
function addIdToValue(val) {
    const id = Math.random();
    return { ...val, id };
}
const post = addIdToValue({ title: 'Marmite Rules', thumbsUp: 250 });
console.log(post.id, post.title, post.thumbsUp);
export {};
//# sourceMappingURL=index13.js.map
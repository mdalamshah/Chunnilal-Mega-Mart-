export const CATS = ["Sarees","Lehengas","Kurtis","Suit Pieces","Men’s T-Shirts","Men’s Jeans","Men’s Cargos","Kids’ Festive Wear"];
export type Product = { id: string; ci: number; cat: string; name: string; c1: string; c2: string; d: string };
const raw: [number, string, string, string, string][] = [
[0,"Silk-look festive saree","#9b1230","#d4a64a","Rich festive drape with a gold-tone border."],
[0,"Everyday printed saree","#1f5f6b","#e9c46a","Light printed saree for daily wear."],
[1,"Bridal-style lehenga","#8e1b3a","#e0b84f","Flared lehenga with a contrast border."],
[1,"Festive lehenga set","#3d2a6b","#e8c36a","Lehenga set in a deep festive tone."],
[2,"Straight-cut kurti","#b5651d","#f3e2c0","Comfortable straight kurti for the season."],
[2,"Embroidered kurti","#2f6b4f","#e8c36a","Kurti with a decorative neckline."],
[3,"Cotton suit piece","#a63446","#f1e3c6","Unstitched suit fabric for your tailor."],
[3,"Printed suit piece","#27567d","#f1d38a","Printed unstitched suit material."],
[4,"Classic round-neck tee","#2b2b36","#c9a24b","Everyday cotton-feel t-shirt."],
[4,"Graphic t-shirt","#7a1020","#f3e2c0","Casual tee in a bold colour."],
[5,"Regular-fit jeans","#2d4a7a","#d9c9a3","Everyday denim in a regular fit."],
[5,"Slim-fit jeans","#1d2a44","#d9c9a3","Slim-fit denim for a sharp look."],
[6,"Utility cargo pants","#5b6b3a","#d9c9a3","Cargos with side pockets."],
[6,"Relaxed cargos","#6b5a45","#d9c9a3","Relaxed-fit cargo style."],
[7,"Festive kids’ frock","#b0245a","#f0d27a","Party frock for festive occasions."],
[7,"Kids’ ethnic set","#c8741a","#f6e4b8","Festive ethnic wear for kids."],
];
export const PRODUCTS: Product[] = raw.map((a, i) => ({ id: "p" + (i + 1), ci: a[0], cat: CATS[a[0]], name: a[1], c1: a[2], c2: a[3], d: a[4] }));

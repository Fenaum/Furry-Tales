"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var admin = require("firebase-admin");
var serviceAccount = require("./furry-tales-35c76-firebase-adminsdk-rxs77-462600353b.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
});
var db = admin.firestore();
function seedCats() {
    return __awaiter(this, void 0, void 0, function () {
        var catsSnapshot, deletePromises, cats, batch;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log("Deleting all existing cats...");
                    return [4 /*yield*/, db.collection("Cats").get()];
                case 1:
                    catsSnapshot = _a.sent();
                    deletePromises = catsSnapshot.docs.map(function (doc) { return doc.ref.delete(); });
                    return [4 /*yield*/, Promise.all(deletePromises)];
                case 2:
                    _a.sent();
                    console.log("All existing cats have been deleted.");
                    console.log("Seeding   10 new unique cats...");
                    cats = [
                        {
                            name: "Whiskers",
                            breed: "Tabby",
                            age: 2,
                            color: "Black",
                            weight: 5,
                            gender: "Male",
                            personality: ["Playful", "Curious"],
                            vaccinations: { vaccine1: true, vaccine2: false },
                            owner: "John Doe",
                            images: ["/images/tabby-cat.jpeg", "/images/tabby-cat2.jpeg"],
                            bio: "Meet Whiskers, the playful tabby who loves chasing after toy mice and curling up in sunny spots for long naps. With his curious nature and affectionate demeanor, Whiskers is sure to bring joy and laughter to any home.",
                        },
                        {
                            name: "Fluffy",
                            breed: "Siamese",
                            age: 3,
                            color: "White",
                            weight: 4,
                            gender: "Female",
                            personality: ["Affectionate", "Calm"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Jane Smith",
                            images: ["/images/siamese-cat.webp", "/images/siamese-cat2.jpeg"],
                            bio: "Fluffy is a sweet Siamese cat with a heart of gold. She enjoys lounging on comfy pillows and receiving gentle pets from her human companions. With her calm and affectionate personality, Fluffy is the perfect cuddle buddy for lazy afternoons and cozy evenings.",
                        },
                        {
                            name: "Sparkle",
                            breed: "Bengal",
                            age: 1,
                            color: "Gold",
                            weight: 3,
                            gender: "Female",
                            personality: ["Energetic", "Curious"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Alice",
                            images: ["/images/bengal-ca.jpeg", "/images/bengal-cat2.jpeg"],
                            bio: "Sparkle is a Bengal beauty with a zest for life. She loves exploring her surroundings and engaging in playful antics with her favorite toys. With her energetic spirit and curious nature, Sparkle will keep you entertained and on your toes.",
                        },
                        {
                            name: "Bolt",
                            breed: "Maine Coon",
                            age: 4,
                            color: "Blue",
                            weight: 10,
                            gender: "Male",
                            personality: ["Lazy", "Friendly"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Bob",
                            images: ["/images/main-coon-cat2.webp", "/images/maine-coon-cat.webp"],
                            bio: "Bolt is a majestic Maine Coon with a gentle soul. Despite his large size, Bolt is a laid-back and friendly feline who enjoys lounging in sunbeams and receiving chin scratches. With his calm demeanor and friendly disposition, Bolt is the epitome of a gentle giant.",
                        },
                        {
                            name: "Patches",
                            breed: "Ragdoll",
                            age: 2,
                            color: "Brown",
                            weight: 6,
                            gender: "Female",
                            personality: ["Lazy", "Affectionate"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Charlie",
                            images: ["/images/ragdoll-cat.jpeg", "/images/ragdoll-cat2.jpeg"],
                            bio: "Meet Patches, the lovable Ragdoll with a heart of gold. Patches enjoys spending her days lounging on soft blankets and receiving gentle pets from her human companions. With her affectionate nature and laid-back personality, Patches is the perfect companion for lazy days and cozy nights.",
                        },
                        {
                            name: "Daisy",
                            breed: "Sphynx",
                            age: 1,
                            color: "White",
                            weight: 4,
                            gender: "Female",
                            personality: ["Playful", "Curious"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Diana",
                            images: ["/images/sphynx-cat.jpeg", "/images/sphynxcat-2.webp"],
                            bio: "Daisy is a playful Sphynx with a curious spirit. Despite her hairless appearance, Daisy is full of energy and loves exploring every nook and cranny of her home. With her playful antics and inquisitive nature, Daisy is sure to keep you entertained and smiling.",
                        },
                        {
                            name: "Misty",
                            breed: "Persian",
                            age: 5,
                            color: "Silver",
                            weight: 7,
                            gender: "Female",
                            personality: ["Independent", "Lazy"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Eva",
                            images: ["/images/persian-cat.webp", "/images/persian-cat2.jpeg"],
                            bio: "Misty is a regal Persian with a flair for independence. She enjoys spending her days lounging in luxurious comfort and observing her surroundings with a watchful eye. With her calm demeanor and independent spirit, Misty is the epitome of grace and elegance.",
                        },
                        {
                            name: "Rex",
                            breed: "Ragdoll",
                            age: 3,
                            color: "Black",
                            weight: 8,
                            gender: "Male",
                            personality: ["Affectionate", "Calm"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Frank",
                            images: [],
                            bio: "Rex is a handsome Ragdoll with a heart of gold. Despite his reserved demeanor, Rex is a loving and affectionate feline who enjoys cuddling up with his human companions. With his gentle nature and calm disposition, Rex is the perfect companion for quiet evenings and lazy weekends.",
                        },
                        {
                            name: "Snowball",
                            breed: "Snowshoe",
                            age: 2,
                            color: "White",
                            weight: 6,
                            gender: "Female",
                            personality: ["Playful", "Curious"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Grace",
                            images: ["/images/snowshoe-cat.jpeg", "/images/snowshow-cat2.jpeg"],
                            bio: "Snowball is a playful Snowshoe with a mischievous streak. She loves chasing after feather toys and pouncing on anything that moves. With her playful antics and curious nature, Snowball is sure to keep you entertained and on your toes.",
                        },
                        {
                            name: "Tigger",
                            breed: "Maine Coon",
                            age: 4,
                            color: "Orange",
                            weight: 12,
                            gender: "Male",
                            personality: ["Energetic", "Friendly"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Harry",
                            images: [""],
                            bio: "Tigger is an energetic Maine Coon with a love for adventure. He enjoys exploring the great outdoors and climbing to new heights. With his playful spirit and friendly demeanor, Tigger is always up for a game of chase or a cuddle session with his favorite humans.",
                        },
                        {
                            name: "Luna",
                            breed: "Siamese",
                            age: 6,
                            color: "Blue",
                            weight: 9,
                            gender: "Female",
                            personality: ["Affectionate", "Calm"],
                            vaccinations: { vaccine1: true, vaccine2: true },
                            owner: "Ivy",
                            images: [""],
                            bio: "Luna is a serene Siamese beauty with a gentle soul. She enjoys lounging in sunlit windowsills and receiving soft pets from her human companions. With her affectionate nature and calm demeanor, Luna is the perfect companion for quiet evenings and peaceful moments of relaxation.",
                        },
                        // ... more unique cats
                    ];
                    batch = db.batch();
                    cats.forEach(function (cat, index) {
                        var catRef = db.collection("Cats").doc();
                        batch.set(catRef, cat);
                    });
                    return [4 /*yield*/, batch.commit()];
                case 3:
                    _a.sent();
                    console.log("10 new unique cats have been seeded.");
                    return [2 /*return*/];
            }
        });
    });
}
seedCats().catch(console.error);

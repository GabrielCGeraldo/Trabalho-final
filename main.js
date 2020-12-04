"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var personagem_1 = __importDefault(require("./personagem"));
var prompt_sync_1 = __importDefault(require("prompt-sync"));
var person = new personagem_1.default("Krn Joy", 100, 40, 20, 20);
var teclado = prompt_sync_1.default();
var Option = 0;
while (Option != 9 || person.isDead()) {
    console.log("+===== personagem ${person.nome}=========+");
    console.log("|1. Treinar ataque        |");
    console.log("|2. Treinar defesa        |");
    console.log("|3. Descansar             |");
    console.log("|4. Entrar em batallha    |");
    console.log("|8. Imprimir atributos    |");
    console.log("|9. sair                  |");
    console.log("+=========================+");
    Option = +teclado("Escolha uma ação: ");
    switch (Option) {
        case 1:
            person.Treinarataque();
            console.log(person.status());
            break;
        case 2:
            person.Treinardefesa();
            console.log(person.status());
            break;
        case 3:
            var horas = +teclado("Digite o Número de Horas?");
            person.descansar(horas);
            console.log(person.status());
            break;
        case 4:
            var rest = person.batalhar();
            console.log('Esta batalha custo ${rest} de energia');
            console.log(person.status());
            break;
        case 8:
            console.log(person.status());
            break;
        default:
            break;
    }
}
console.log("Ops! Morreu!");

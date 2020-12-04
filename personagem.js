"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//nome, energia, vida, ataque, defesa
var Personagem = /** @class */ (function () {
    function Personagem(_nome, energia, vida, ataque, defesa) {
        this._nome = _nome;
        this.energia = energia;
        this.vida = vida;
        this.ataque = ataque;
        this.defesa = defesa;
    }
    Object.defineProperty(Personagem.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (nome) {
            this._nome = nome;
        },
        enumerable: false,
        configurable: true
    });
    Personagem.prototype.status = function () {
        return ("Guerreiro: \n" +
            "\nNome: " +
            this.nome +
            ("\nEnergia: " + this.energia.toFixed(1)) +
            ("\nAtaque: " + this.ataque.toFixed(1)) +
            ("\nDefesa: " + this.defesa.toFixed(1)));
    };
    Personagem.prototype.Treinarataque = function () {
        this.ataque += this.randomizar(7);
        this.energia -= this.randomizar(5);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.Treinardefesa = function () {
        this.defesa += this.randomizar(5);
        this.energia -= this.randomizar(10);
        if (this.defesa > 100) {
            this.defesa = 0;
        }
    };
    Personagem.prototype.descansar = function (hour) {
        this.energia += hour * this.randomizar(10);
        if (this.energia > 100) {
            this.energia = 100;
        }
    };
    Personagem.prototype.batalhar = function () {
        var desgaste = this.randomizar(10);
        this.energia -= desgaste;
        return desgaste;
    };
    Personagem.prototype.isDead = function () {
        return this.energia < 0;
    };
    Personagem.prototype.randomizar = function (fator) {
        return (Math.random() * 10);
    };
    return Personagem;
}());
exports.default = Personagem;

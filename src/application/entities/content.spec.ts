import { Content } from "./content"

describe('Notification content', () => {
    it('it should be able to create a notification content', () => {
        const content = new Content('Voce recebeu uma solicitacao de amizade.');
        expect(content).toBeTruthy();
    })
    
    it('It shoult not be possible to create a notification with less than 5 characters', () => {
        
        expect(() => new Content('ABC')).toThrow();
    })
    it('It shoult not be possible to create a notification with more than 240 characters', () => {
        
        expect(() => new Content('a'.repeat(241))).toThrow();
    })
})

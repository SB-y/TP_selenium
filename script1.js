const { Builder, By, until } = require('selenium-webdriver');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


async function script1() {
    // 1) Instancier le driver (Chrome)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Ouvrir le lien de la page
        await driver.get('https://www.saucedemo.com/');
        await sleep(2000);

        //Déclaration des variables d'authentifications
        const username = 'standard_user';
        const password = 'secret_sauce';

        // Trouver les champs de saisie
        const champIdentifiant = await driver.wait(until.elementLocated(By.id('user-name')), 10000);
        await driver.wait(until.elementIsVisible(champIdentifiant), 2000);

        const champPassword = await driver.wait(until.elementLocated(By.id('password')), 10000);
        await driver.wait(until.elementIsVisible(champPassword), 2000);

        // Saisir le username dans le champ1
        await champIdentifiant.sendKeys(username);
        await sleep(2000);

        // Saisir le password dans le champ2
        await champPassword.sendKeys(password);
        await sleep(2000);

        // Trouver le bouton et click
        const boutonLogin = await driver.findElement(By.id("login-button"));
        await driver.wait(until.elementIsVisible(boutonLogin), 5000);
        await boutonLogin.click();
        await sleep(2000);

        //Récupération des 6 articles
        await driver.wait(until.elementsLocated(By.css('.inventory_item_name')), 10000);
        const results = await driver.findElements(By.css('.inventory_item_name'));
        console.log('\n Liste des 6 articles dispos :');
        for (let i = 0; i < Math.min(6, results.length); i++) {
            const title = await results[i].getText();
            console.log(`${i + 1}. ${title}`);
        }

    }

    catch (e) {
        console.error('Erreur rencontrée :', e.message);
    }

    finally {
        // Fermer le navigateur
        await driver.quit();
    }
};


// Appel de la fonction
script1();

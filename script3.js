const { Builder, By, until } = require('selenium-webdriver');
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));


async function script3() {
    // 1) Instancier le driver (Chrome)
    const driver = await new Builder().forBrowser('chrome').build();

    try {
        // Ouvrir le lien de la page
        await driver.get('https://www.saucedemo.com/');
        await sleep(1000);

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
        await sleep(1000);

        // Saisir le password dans le champ2
        await champPassword.sendKeys(password);
        await sleep(1000);

        // Trouver le bouton et click
        const boutonLogin = await driver.findElement(By.id("login-button"));
        await driver.wait(until.elementIsVisible(boutonLogin), 5000);
        await boutonLogin.click();
        await sleep(1000);



        //Sur la page articles
        // Trouver le bouton filtre et appuyer dessus
        const filtre = await driver.findElement(By.css(".product_sort_container"));
        await driver.wait(until.elementIsVisible(filtre), 5000);
        await filtre.click();
        await sleep(1000);

        // Sélectionner l'option "Price (low to high)" par sa value
        const optionLohi = await filtre.findElement(By.css('option[value="lohi"]'));
        await optionLohi.click();
        await sleep(1000);


        //Récupération des 3 articles
        await driver.wait(until.elementsLocated(By.css('.inventory_item_name')), 10000);
        const results = await driver.findElements(By.css('.inventory_item_name'));
        const prices = await driver.findElements(By.css('.inventory_item_price'));
        console.log('\n Liste des 3 articles les moins chers :');
        for (let i = 0; i < Math.min(3, results.length); i++) {
            const title = await results[i].getText();
            const price = await prices[i].getText();
            console.log(`${i + 1}. ${title} - Prix : ${price}`);
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
script3();

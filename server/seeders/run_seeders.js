import {} from './load_file.js';;

(async () => {
    try {
        
        console.log('Data loading process completed.');
        process.exit(0);
    } catch (error) {
        console.error('Error in the data loading process:', error);
        process.exit(1);
    }
})();
function getOSinfo() {
        var type = os.type();
        if(type === 'Darwin') {
            type = 'OSX';
        } else if(type === 'Windows_NT') {
            type = 'Windows';
        }
        var release = os.release();
        var cpu = os.cpus()[0].model;
        var uptime = os.uptime();
        var userInfo = os.userInfo();
        console.log('System:'.green, type);
        console.log('Release:'.blue, release);
        console.log('CPU model:'.red, cpu);
        console.log('Uptime: ~'.grey, (uptime / 60).toFixed(0), 'min');
        console.log('User name:'.yellow, userInfo.username);
        console.log('Home dir:', userInfo.homedir);
    }
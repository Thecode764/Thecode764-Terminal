let history = []
let theme_for_terminal = "dark"
$('body').terminal({
    help: function () { 
        this.echo('<h1 style="color:red;">© 2024 Thecode764 Portfolio Website</h1><p style="color:yellowgreen;">Welcome to Thecode764 terminal portfolio<br>Here is <b>Help section</b></p><br><p style="color:blue;">pwd: Show the dir<br>socials: My social media<br>neofetch: The neofetch command<br>clear: Clear the screen<br>reboot: Restart the terminal<br>whoami: The whoami command<br>about: About me<br>history: Command history<br>search: Search in google for space use %20<br>poweroff: Power off this terminal<br>echo: Print text<br>themeset --help: Set a theme for terminal<br>snk: Snake game for my github profile</p>', { typing: true, delay: 30, raw:true });
        history.push("help")
    }, 
    pwd: function () {
        this.echo('<p style="color:red;">/home/null</p>', { typing: true, delay: 30, raw:true })
        history.push("pwd")
    },
    socials: function () {
        this.echo(`<div style="display:flex;align-items:center;justify-content:center;gap:5px;">
        <a href="https://github.com/Thecode764" target="_blank" style="text-decoration:underline;">Github</a>
<a href="https://discord.com/users/1125429179685548112" style="text-decoration:underline;">Discord</a>
</div>`,  { typing: true, delay: 1, raw:true })
        history.push("socials")
    },
    neofetch: function () {
        if (theme_for_terminal == "dark") {
            this.echo(`<h1 style="color:red;">Neofetch</h1>Name: Terminal portfolio OS<br>Version: V 0.3<br>Github: <a href="https://github.com/Thecode764" style="text-decoration:underline;">Github</a><br>Discord: <a href="https://discord.com/users/11254291796855481<12" style="text-decoration: underline;">Discord</a><br>Developer: <a href="https://github.com/Thecode764" style="text-decoration:underline;">Artin karimi</a><br>Browser: ${navigator.userAgent}<br>Theme: Dark`, {raw:true})
        } else if (theme_for_terminal == "light") {
            this.echo(`<h1 style="color:red;">Neofetch</h1>Name: Terminal portfolio OS<br>Version: V 0.3<br>Github: <a href="https://github.com/Thecode764" style="text-decoration:underline;">Github</a><br>Discord: <a href="https://discord.com/users/11254291796855481<12" style="text-decoration: underline;">Discord</a><br>Developer: <a href="https://github.com/Thecode764" style="text-decoration:underline;">Artin karimi</a><br>Browser: ${navigator.userAgent}<br>Theme: Light`, {raw:true})
        } else if (theme_for_terminal == "ubuntu") {
            this.echo(`<h1 style="color:red;">Neofetch</h1>Name: Terminal portfolio OS<br>Version: V 0.3<br>Github: <a href="https://github.com/Thecode764" style="text-decoration:underline;">Github</a><br>Discord: <a href="https://discord.com/users/11254291796855481<12" style="text-decoration: underline;">Discord</a><br>Developer: <a href="https://github.com/Thecode764" style="text-decoration:underline;">Artin karimi</a><br>Browser: ${navigator.userAgent}<br>Theme: Ubuntu`, {raw:true})
        }
        history.push('neofetch')
    },
    reboot: function () {
        window.location.reload()
        history.push("reboot")
    },
    whoami: function () {
        this.echo('<p style="background-image:linear-gradient(black, gray);border-radius:5px;">null</p>', {raw:true, typing: true, delay: 30})
        history.push("whoami")
    },
    about: function () {
        this.echo('<h1 style="color:red;">About me</h1><p style="color:blue;">Hi i am artin karimi<br>I am a <b>Web developer and python</b> Developer</p><p style="color:red;">I love programming 💖 I use linux. linux is best <3</p><p style="color:yellowgreen;">I use flask for backend i learning react for front-end ⚡️</p>', {raw:true, typing:true, delay:30})
        history.push("about")
    },
    history: function () {
        this.echo(`<p style="color:blue;">History for ${new Date().toDateString()}:</p>${history.join("<br>")}<br>`, {raw:true, typing:true, delay:30})
        history.push("history")
    },
    search: function (data) {
        this.echo(`<a href="https://www.google.com/search?q=${data}&sca_upv=1" style="text-decoration:underline;color:red;">Link</a>`,{raw:true, typing:true, delay:30})
        this.echo('<h1 style="color:yellowgreen">You search result opened in new page! 🚀</h1>',{raw:true, typing:true, delay:30})
        history.push(`search ${data}`)
    },
    poweroff: function () {
        window.location.href = "https://google.com"
        history.push("poweroff")
    },
    echo: function (text) {
        this.echo(text)
        history.push(`echo ${text}`)
    },
    themeset: function (theme) {
        if (theme == "--help") {
            this.echo(`<h1 style="color:yellowgreen;">Themes</h1><p style="color:purple;">Ubuntu (themeset ubuntu)</p><p>Dark (Default) (themeset dark)</p><p>Light (themeset light)</p>`,{raw:true})
            history.push("themeset --help")
        }
        else if (theme == "ubuntu") {
            body = document.getElementsByClassName('terminal')
            for (var i = 0; i < body.length; i++) {
                // Add the class to each element
                body[i].classList.remove(theme_for_terminal);
                body[i].classList.add('ubuntu');
                theme_for_terminal = "ubuntu"
            } 
            history.push('<p style="color:purple;">themeset ubuntu</p>')
        } else if (theme == "dark") {
            body = document.getElementsByClassName('terminal')
            for (var i = 0; i < body.length; i++) {
                // Add the class to each element
                body[i].classList.remove(theme_for_terminal);
                body[i].classList.add('dark');
                theme_for_terminal = "dark"
            }
            history.push('<p style="color:gray;">themeset dark</p>')
        } else if (theme == "light") {
            body = document.getElementsByClassName('terminal')
            for (var i = 0; i < body.length; i++) {
                // Add the class to each element
                body[i].classList.remove(theme_for_terminal);
                body[i].classList.add('light');
                theme_for_terminal = "light"
            }
            history.push('<p style="color:azure;">themeset light</p>')
        }
        else {
            this.echo(`<h1 style="color:red;">Theme not found! 🔇</h1>`,{raw:true})
            history.push(`themeset ${theme}`)
        }
    },
    snk: function () {
        this.echo(`<picture>
  <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/kian-ahmadian/kian-ahmadian/output/github-contribution-grid-snake-dark.svg">
  <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/kian-ahmadian/kian-ahmadian/output/github-contribution-grid-snake.svg">
  <img alt="Kian Ahmadian contribution" src="https://raw.githubusercontent.com/kian-ahmadian/kian-ahmadian/output/github-contribution-grid-snake.svg">
</picture>`, {raw:true})
    }
}, { 
    greetings: '<h1 style="color:red;">Welcome to Thecode764 Portfolio website</h1><p style="color:yellowgreen;">The three version of my website was created in 2024 for best design this terminal created with jquery.terminal type "help" for start 🔍️</p><p style="color:red;">⚡️ Wait for command output please! i used writer effects</p><p style="color:blue;">The terminal is fast ⚡️</p><p style="color:orange;">✅ Have auto complete with TAB</p>',
    prompt: 'null ⚡️@Thecode764: ',
    raw: true,
    onCommandNotFound: function(command, term) {
        term.echo(`<h1 style="color:red;">Command error</h1><p>Command <b>${command} Not Found!</b><br><p style="color:green;"><b>Type :help: for view commands 🔧</b></p>`, {raw: true, typing: true, delay: 30})
    },
    completion: true
});

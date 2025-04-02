#!/bin/bash

sudo apt update

# Install gcc
sudo apt install -y build-essential g++

# Install vsc
if ! command -v code &> /dev/null; then
    wget -O vscode.deb "https://code.visualstudio.com/sha/download?build=stable&os=linux-deb-x64"
    sudo apt install -y ./vscode.deb
    rm vscode.deb
fi

# Set up gpp in vsc
mkdir -p ~/.vscode
echo '{
    "code-runner.executorMap": {
        "cpp": "g++ $fileName -o $fileNameWithoutExt && ./$fileNameWithoutExt"
    }
}' > ~/.vscode/settings.json

echo "Setup complete! You can now compile and run C++ files with VS Code."


gsettings set org.cinnamon.desktop.interface gtk-theme "Mint-Y-Dark"
gsettings set org.cinnamon.desktop.interface icon-theme "Mint-Y"
gsettings set org.cinnamon.desktop.wm.preferences theme "Mint-Y-Dark"

echo "Acest script instalează aplicații în Linux Mint în funcție de preferințele tale."
echo "Apasă Enter pentru a accepta opțiunea implicită (N)."

install_pkg() {
    read -p "Vrei $1? (y/N): " response
    response=${response,,}
    if [[ "$response" == "y" ]]; then
        sudo apt install -y $2
    else
        echo "❌ $1 nu a fost instalat."
    fi
}

sudo apt update

install_pkg "Discord" "discord"
install_pkg "VLC" "vlc"
install_pkg "qBittorrent" "qbittorrent"
install_pkg "Spotify" "spotify-client"
install_pkg "GIMP" "gimp"
install_pkg "Steam" "steam"
install_pkg "Wine (și toate componentele necesare)" "wine winetricks"

echo "✅ Instalare finalizată!"

xdg-open 'https://accounts.google.com/v3/signin/identifier?authuser=0&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1%26nlr%3D1&ec=GAlAwAE&hl=ro&service=accountsettings&flowName=GlifWebSignIn&flowEntry=AddSession&dsh=S-1322495636%3A1743577427174892'

sudo apt install sl cmatrix lolcat figlet neofetch
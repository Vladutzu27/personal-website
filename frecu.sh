#!/bin/bash
clear
echo $'    dMMMMMP dMMMMb  dMMMMMP .aMMMb  dMP dMP      .dMMMb  dMP dMP \n   dMP     dMP.dMP dMP     dMP"VMP dMP dMP      dMP" VP dMP dMP  \n  dMMMP   dMMMMK" dMMMP   dMP     dMP dMP       VMMMb  dMMMMMP   \n dMP     dMP"AMF dMP     dMP.aMP dMP.aMP  amr dP .dMP dMP dMP    \ndMP     dMP dMP dMMMMMP  VMMMP"  VMMMP"  dMP  VMMMP" dMP dMP     '

sudo apt update
 
gsettings set org.cinnamon.muffin tile-maximize true
 
url="https://discord.com/api/download?platform=linux&format=deb"
curl -L -o /tmp/discord.deb $url
sudo apt install /tmp/discord.deb
 
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
 
wget https://github.com/vinceliuice/Orchis-theme/archive/refs/tags/2024-11-03.tar.gz
tar -x -f 2024-11-03.tar.gz
bash Orchis-theme-2024-11-03/install.sh 
gsettings set org.cinnamon.desktop.interface gtk-theme "Orchis-Dark"
gsettings set org.cinnamon.desktop.wm.preferences theme "Orchis-Dark"
 
echo "Acest script instalează aplicații în Linux Mint în funcție de preferințele tale."
echo "Apasă Enter pentru a accepta opțiunea implicită (N)."
 
install_pkg() {
    read -p "Vrei $1? (y/N): " response
    response=${response,,}
    if [[ "$response" == "y" ]]; then
        sudo apt install -y $2
    fi
}
 
sudo apt update
 
install_pkg "VLC" "vlc"
install_pkg "qBittorrent" "qbittorrent"
install_pkg "Spotify" "spotify-client"
install_pkg "GIMP" "gimp"
install_pkg "Steam" "steam"
install_pkg "Wine (și toate componentele necesare)" "wine winetricks"
 
sudo apt install sl cmatrix lolcat figlet neofetch
 
wget 'https://github.com/ful1e5/apple_cursor/releases/download/v2.0.1/macOS.tar.xz'
 
tar -xvf macOS.tar.gz
mv macOS* ~/.icons/
sudo mv macOS* /usr/share/icons/
 
gsettings set org.cinnamon.desktop.interface cursor-theme "macOS"
 
wget ""
wget -O "$HOME/Desktop/desktop.png" "https://dirid.am/desktop.png"
 
gsettings set org.cinnamon.desktop.background picture-uri "file://$HOME/Desktop/desktop.png"
 
wget 'https://github.com/ful1e5/apple_cursor/releases/download/v2.0.1/macOS.tar.xz'
 
tar -xvf macOS.tar.xz
mv macOS* ~/.icons/
sudo mv macOS* /usr/share/icons/
 
gsettings set org.cinnamon.desktop.interface cursor-theme "macOS"
 
 

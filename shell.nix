{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = with pkgs; [
    # Node.js and npm
    nodejs_20

    # Git (if not already available)
    git

    # Optional: helpful development tools
    nodePackages.npm
  ];

  shellHook = ''
    echo "🚀 SHIFT Demo Development Environment"
    echo "Node version: $(node --version)"
    echo "npm version: $(npm --version)"
    echo ""
    echo "Available commands:"
    echo "  npm install    - Install dependencies"
    echo "  npm run dev    - Start development server"
    echo "  npm run build  - Build for production"
    echo "  npm run preview - Preview production build"
    echo ""

    # Install dependencies if node_modules doesn't exist
    if [ ! -d "node_modules" ]; then
      echo "📦 Installing dependencies..."
      npm install
    fi
  '';
}

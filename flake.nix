{
  description = "The flake to build my website";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs?ref=nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      ...
    }:

    flake-utils.lib.eachDefaultSystem (
      local-system:
      let
        pkgs = nixpkgs.legacyPackages.${local-system};
      in
      {
        devShells.default = pkgs.mkShell {
          name = "portfolio flake";

          packages = with pkgs; [
            # Runtime (only for the local development)
            bun

            # LSP tools
            vtsls
            tailwindcss-language-server

            # Bundler
            vitejs

            # Styling
            tailwindcss_4

            # Deployment
            firebase-tools
          ];
        };
      }
    );
}

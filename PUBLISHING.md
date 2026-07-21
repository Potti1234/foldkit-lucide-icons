# Publishing to npm

The package name `foldkit-lucide-icons` was available when this repository was prepared. npm names
are claimed on a first-publish basis, so verify it again immediately before publishing.

## 1. Create and verify your npm account

1. Create an account at <https://www.npmjs.com/signup>.
2. Verify the email address npm sends you.
3. Enable two-factor authentication in your npm account settings. npm may require a one-time
   password when publishing from your terminal.

Your npm username does not have to match your GitHub username.

## 2. Log in from this computer

Run this in the repository directory:

```sh
npm login
npm whoami
```

Do not commit npm tokens or the contents of your user-level `.npmrc` file.

## 3. Review the release

Make sure the working tree is clean and run the complete verification:

```sh
git status
npm install
npm run check
```

`npm run check` type-checks, tests, builds, and shows exactly which files the package tarball will
contain. You can also inspect the package metadata that npm will use:

```sh
npm view foldkit-lucide-icons
npm pack --dry-run
```

For the first release, the `npm view` command should return a 404 because no release exists yet.

## 4. Commit and tag the release

```sh
git add .
git commit -m "Prepare foldkit-lucide-icons 0.1.0"
git push origin main
```

## 5. Publish version 0.1.0

```sh
npm publish
```

The `prepublishOnly` script automatically runs all checks again. The package has
`publishConfig.access` set to `public`, so it will be publicly installable. Publishing is permanent
in the practical sense: avoid unpublishing releases; publish a corrected version instead.

After it succeeds, create and push a matching Git tag:

```sh
git tag v0.1.0
git push origin v0.1.0
```

Confirm the published package from a temporary project:

```sh
npm view foldkit-lucide-icons
npm install foldkit-lucide-icons foldkit
```

## Future releases

Change the version with npm's version command. It updates `package.json`, creates a commit, and
creates a Git tag:

```sh
npm version patch
git push origin main --follow-tags
npm publish
```

Use `patch` for compatible fixes (`0.1.0` to `0.1.1`), `minor` for compatible features (`0.1.0`
to `0.2.0`), and `major` for breaking API changes once the package reaches `1.0.0`.

Before every release, check that the version does not already exist:

```sh
npm view foldkit-lucide-icons versions
```

npm never lets you reuse a version number, even if a release is later unpublished.

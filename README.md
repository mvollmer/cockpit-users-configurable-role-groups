Cockpit "users" component with configurable role groups

Put this into `~/.local/share/cockpit/`, maye like so:

```
$ mkdir -p ~/.local/share/cockpit
$ cd ~/.local/share/cockpit/
$ git clone https://github.com/mvollmer/cockpit-users-configurable-role-groups
```

You can check that Cockpit picks it up:

```
$ cockpit-bridge --packages | grep ^users
storage: /root/.local/share/cockpit/cockpit-users-configurable-role-groups
```

Then log out of Cockpit and log in again.

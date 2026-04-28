// Profile Picture Preview Logic
document.getElementById('editProfilePic').onchange = function (evt) {
    const [file] = this.files;
    if (file) {
        document.getElementById('editProfilePicPreview').src = URL.createObjectURL(file);
    }
};

// Close Dialog Logic
document.getElementById('cancelProfileBtn').onclick = function() {
    document.getElementById('profileSettingsDialog').classList.add('hidden');
    document.getElementById('feedModeTab').classList.remove('hidden');
};

document.getElementById('updateProfileBtn').onclick = function() {
    const name = document.getElementById('editDisplayName').value;
    if (name.length < 5) {
        alert("Display Name must be at least 5 characters!");
        return;
    }
    alert("Profile Updated Successfully!");
    document.getElementById('profileSettingsDialog').classList.add('hidden');
    document.getElementById('feedModeTab').classList.remove('hidden');
};

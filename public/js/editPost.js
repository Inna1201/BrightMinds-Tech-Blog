const editPostFormHandler = async function (event) {
  event.preventDefault();

  const blogId = document.querySelector("#blog-id").value.trim();
  const title = document.querySelector("#post-title").value.trim();
  const content = document.querySelector("#post-content").value.trim();

  const response = await fetch(`/api/post/edit/${blogId}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
  document.location.replace("/dashboard");
} else {
    alert('Failed to edit post');
  }
};

document.querySelector('#eform').addEventListener('submit', editPostFormHandler);


const deeteBtnHandler = async (event) => {
  event.preventDefault();
  const blogId = document.querySelector("#blog-id").value.trim();
      const response = await fetch(`/api/post/${blogId}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
  };

  document.querySelector('#btn-delete').addEventListener('click', deeteBtnHandler);



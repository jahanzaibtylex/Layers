from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in layers/__init__.py
from layers import __version__ as version

setup(
	name="layers",
	version=version,
	description="Layers",
	author="xabi",
	author_email="jahanzaib541asif@gmail.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
